from django.contrib import admin
from .models import (
    PackageComment,
    User,
    Label,
    Travellers,
    Business,
    Guide,
    Package,
    PackageSubscription,
    Event,
    EventInterested,
    Post,
    PostComment
)

from django.utils import timezone
# Custom User admin (if needed for additional display configuration)
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "first_name", "last_name", "is_staff")
    search_fields = ("username", "email")


# Register Label
@admin.register(Label)
class LabelAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


# Register Travellers
@admin.register(Travellers)
class TravellersAdmin(admin.ModelAdmin):
    list_display = ("id", "base_user")
    search_fields = ("base_user__username",)
    filter_horizontal = ("interests",)


# Register Business

# Register Guide
@admin.register(Guide)
class GuideAdmin(admin.ModelAdmin):
    list_display = ("id", "base_user__username", "base_user__email")
    search_fields = ("base_user__username", "base_user__email")
    filter_horizontal = ("label",)



@admin.register(PackageSubscription)
class PackageSubscriptionAdmin(admin.ModelAdmin):
    list_display=("package","subscribed_by")
# # Register PackageLike
# @admin.register(PackageSubscription)
# class PackageLikeAdmin(admin.ModelAdmin):
#     list_display = ("id", "package", "liked_by")
#     search_fields = ("package__name", "liked_by__username")


# Register Event
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description")
    search_fields = ("name",)
    filter_horizontal = ("label",)


# Register EventLike
@admin.register(EventInterested)
class EventLikeAdmin(admin.ModelAdmin):
    list_display = ("id", "event", "interested_user")
    search_fields = ("event__name", "interested_user__username")


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "description")
    search_fields = ("description",)
    filter_horizontal = ("label",)

@admin.register(PostComment)
class PostCommentAdmin(admin.ModelAdmin):
    list_display=("id","comment","commented_by__username")
    
@admin.register(PackageComment)
class PackageCommentAdmin(admin.ModelAdmin):
    list_display=("id","comment","commented_by__username")
    

@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    list_display = ("id", "base_user__username", "base_user__email")
    search_fields = ("base_user__username", "base_user__email")

# Register Package
@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ("id", "name",  "price", )
    search_fields = ("name", )
    filter_horizontal = ("label",)
    readonly_fields= ['reviews_percentage']
    def reviews_percentage(self,obj):
        

        comments = PackageComment.objects.filter(package__id=obj.id).values_list('comment',flat=True)
        print(comments)
        print(len(comments))
        if(len(comments)==0):
            return "no reviews"
        from tf_keras.models import load_model
        from tf_keras.preprocessing.sequence import pad_sequences
        from tf_keras.preprocessing.text import Tokenizer
        import numpy as np
        import json
        import pandas as pd
        from pathlib import Path

        try:
            # Load Model
            DIR = Path(__file__).resolve().parent.parent
            print(DIR)
            model_path =  DIR / "core" /"machineLearning" / "model.h5"
            # model_path =  "/core/machineLearning/model.h5"
            model = load_model(model_path)

            print(model_path)

            # CSV path
            csv_file =DIR / "core" /"machineLearning" / "output.txt"

            # Reading from CSV file
            with open(csv_file, mode="r") as file:
                data = [line.strip() for line in file]

            max_words = 5000
            max_len = 600

            tokenizer = Tokenizer(num_words=max_words)
            tokenizer.fit_on_texts(data)


            def predictions(df):
                reviewText = df["reviewText"].tolist()
                num = df.shape[0]
                sequence = tokenizer.texts_to_sequences(reviewText)
                test_review = pad_sequences(sequence, maxlen=max_len)

                sentiment = []
                print(df)
                for i in range(num):
                    eachsentiment = ["Negative", "Neutral", "Positive"][
                        np.around(model.predict(test_review), decimals=4).argmax(axis=1)[i]
                    ]
                    sentiment.append(eachsentiment)

                positiveCount = sentiment.count("Positive")
                negativeCount = sentiment.count("Negative")
                neutralCount = sentiment.count("Neutral")

                positivePercentage = positiveCount / num
                negativePercentage = negativeCount / num
                neutralPercentage = neutralCount / num


                resultDataDic = {"comments": {}}
                for i, text in enumerate(reviewText):
                    resultDataDic["comments"][text] = sentiment[i]

                resultDataDic["Percentage"] = {
                    "Positive": positivePercentage,
                    "Negative": negativePercentage,
                    "Neutral": neutralPercentage,
                }
                return resultDataDic
                # with open(BASE_DIR / "machineLearning" / "output.json", "w") as outfile:
                #     json.dump(resultDataDic, outfile)

        except Exception as e:
            print(f"An error occurred: {e}")

        # Get the current time
        current_time = timezone.now()

        # Create a list of dictionaries for DataFrame
        data = [{'reviewText': comment, 'reviewTime': current_time} for comment in comments]
        if(data.count==0):
            return "No reviews"
            
        print(data)
        # Create a pandas DataFrame from the data
        df = pd.DataFrame(data)

        json_result = predictions(df=df)
        percentage= json_result.get('Percentage',json_result)
        return f"Positive : {percentage.get('Positive')}\n Negative : {percentage.get('Negative')} \n Neutral : {percentage.get('Neutral')}";

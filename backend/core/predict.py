from tf_keras.models import load_model
from tf_keras.preprocessing.sequence import pad_sequences

from tf_keras.preprocessing.text import Tokenizer
import numpy as np
import json
import pandas as pd
from pathlib import Path


# Get the base directory of the script
BASE_DIR = Path(__file__).resolve().parent.parent
print(BASE_DIR)
# model_path = BASE_DIR / "machineLearning" / "model" / "model.h5"

try:
    # Load Model
    model_path =  BASE_DIR / "core" /"machineLearning" / "model.h5"
    model = load_model(model_path)

    print(model_path)

    # CSV path
    csv_file = BASE_DIR / "core" /"machineLearning" / "model.h5"

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
# MEDIA = BASE_DIR.parent() /"media"
# df = pd.read_csv("MEDIA/reviews.csv")
# predictions(df)
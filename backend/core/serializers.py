from rest_framework import serializers
from .models import Business,  EventInterested, Post, User, Travellers, Label, Package, Event,PostComment,PostLike


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = "__all__"


class TravellersSerializer(serializers.ModelSerializer):
    # interests = serializers.StringRelatedField()  # Serializes labels as a list of Label objects
    # interests = serializers.SerializerMethodField()
    interests = LabelSerializer(many=True, required=False)
    # interests = serializers.StringRelatedField()
    base_user = UserSerializer()

    def create(self, validated_data):
        # Extract the nested data for instructor feedback
        print(validated_data)
        interests = validated_data.pop("interests", None)
        user_data = validated_data.pop("base_user", None)
        # # Create the student instance

        user_key = User(username=user_data["username"], password=user_data["password"])
        user_key.save()

        # validated_data.push('base_user',user)
        traveller = Travellers.objects.create(base_user=user_key, **validated_data)

        if interests is not None:

            for interest in interests:
                label, created = Label.objects.get_or_create(**interest)
                traveller.interests.add(label.pk)
        traveller.save()
        return traveller

    class Meta:
        model = Travellers
        fields = "__all__"


class SimpleBusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ["id", "username", "email"]  # Include only essential fields


class PackageSerializer(serializers.ModelSerializer):
    # interests = serializers.StringRelatedField()  # Serializes labels as a list of Label objects
    # interests = serializers.SerializerMethodField()
    # interests = LabelSerializer(many=True,required= False)
    # interests = serializers.StringRelatedField()
    # base_user = UserSerializer()
    business = SimpleBusinessSerializer()

    def create(self, validated_data):
        # Extract the nested data for instructor feedback
        print(validated_data)
        label = validated_data.pop("label", None)

        # validated_data.push('base_user',user)
        package = Package.objects.create(**validated_data)

        if label is not None:

            for i in label:
                label, created = Label.objects.get_or_create(**i)
                package.interests.add(label.pk)
        package.save()
        return package

    class Meta:
        model = Package
        fields = "__all__"


class BusinessSerializer(serializers.ModelSerializer):
    # packages = PackageSerializer(many=True, read_only=True)  # Include related packages
    # packages = serializers.SerializerMethodField()

    class Meta:
        model = Business
        fields = ["id", "username", "email", "packages"]

# class EventCommentSerializer(serializers.ModelSerializer):
#     commented_by = serializers.CharField(source='commented_by.username')

#     class Meta:
#         model = EventComment
#         fields = ['id', 'comment', 'commented_by']

# Serializer for EventLike
class EventLikeSerializer(serializers.ModelSerializer):
    interested_users = serializers.CharField(source='liked_by.username')

    class Meta:
        model = EventInterested
        fields = ['id', 'liked_by']

class EventSerializer(serializers.ModelSerializer):
    label = LabelSerializer(many=True, required=False)
    # user = serializers.JSONField(source='created_by', read_only=True)
    # postcomment_set = EventCommentSerializer(source='comments', many=True, read_only=True)
    eventlike_set = EventLikeSerializer(source='likes', many=True, read_only=True)
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Rename 'base_user' to 'user' in the serialized output
        user_id= representation.pop('created_by', None)
        user = User.objects.get(id = user_id)
        representation['user'] = UserSerializer(instance=user).data
        return representation
    def create(self, validated_data):
        # Extract the nested data for instructor feedback
        print(validated_data)
        labels = validated_data.pop("label", None)

        # validated_data.push('base_user',user)
        event = Event.objects.create(**validated_data)

        if labels is not None:
            for label in labels:
                label_instance, created = Label.objects.get_or_create(**label)
                event.label.add(label_instance.pk)
        event.save()
        return event

    class Meta:
        model = Event
        fields = "__all__"

class PostCommentSerializer(serializers.ModelSerializer):
    commented_by = serializers.CharField(source='commented_by.username')

    class Meta:
        model = PostComment
        fields = ['id', 'comment', 'commented_by']

# Serializer for PostLike
class PostLikeSerializer(serializers.ModelSerializer):
    liked_by = serializers.CharField(source='liked_by.username')

    class Meta:
        model = PostLike
        fields = ['id', 'liked_by']

class PostSerializer(serializers.ModelSerializer):
    label = LabelSerializer(many=True, required=False)
    postcomment_set = PostCommentSerializer(source='comments', many=True, read_only=True)
    postlike_set = PostLikeSerializer(source='likes', many=True, read_only=True)
    # base_user = UserSerializer(read_only=True)
    user = serializers.JSONField(source='base_user', read_only=True)
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Rename 'base_user' to 'user' in the serialized output
        representation['user'] = representation.pop('base_user', None)
        return representation
    def create(self, validated_data):
        # Extract the nested data for instructor feedback
        print(validated_data)
        labels = validated_data.pop("label", None)
        # user_data = validated_data.pop('base_user', None)
        # # Create the student instance

        # user_key=User(username = user_data['username'],password=user_data['password'])
        # user_key.save()

        # validated_data.push('base_user',user)
        post = Post.objects.create(**validated_data)

        if labels is not None:
            for label in labels:
                label_instance, created = Label.objects.get_or_create(**label)
                post.label.add(label_instance.pk)
        post.save()
        return post

    class Meta:
        model = Post
        fields = "__all__"

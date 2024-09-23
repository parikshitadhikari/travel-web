from django.shortcuts import render
from rest_framework import viewsets, permissions, authentication, status
from rest_framework.request import Request
from rest_framework.response import Response
from core.models import (
    Business,
    Event,
    Label,
    Package,
    User,
    Travellers,
    PackageLike,
    Post,
    PostComment,
    PostLike,
)
from core.serializers import (
    BusinessSerializer,
    EventSerializer,
    PackageSerializer,
    TravellersSerializer,
    UserSerializer,
    LabelSerializer,
    PostSerializer,
)
from rest_framework.decorators import action
from django.db.models import Count
from .authentication import CustomAuthentication
from rest_framework.test import CoreAPIClient
# Create your views here.
# class UserRegistrationView(APIView):
#     renderer_classes = [UserRenderer]
#     def post(self, request, format=None):
#         serializer = UserRegisterationSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         token = get_tokens_for_user(user)
#         user_info = UserProfileSerializer(user)
#         return Response({'token':token, 'info':user_info.data}, status=status.HTTP_201_CREATED)


# Json Fields
# username
# password
# interests
class TravellersViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Travellers.objects.all()
    serializer_class = TravellersSerializer

    @action(
        methods=["POST"], permission_classes=[], authentication_classes=[], detail=False
    )
    def create_user(self, request, *args, **kwargs):
        data = request.data
        base_user = {
            "username": data["username"],
            "password": data["password"],
            "email": data["email"],
        }
        data["base_user"] = base_user
        interests = data["interests"]
        # print(interests)
        # traveller_serializer.

        data["interests"] = []
        for interest in interests:
            # print(interest)
            data["interests"].append({"name": interest})

        # data['interests']=None
        # print(data)
        # print(data['interests'])
        traveller_serializer = self.serializer_class(data=data)
        traveller_serializer.is_valid(raise_exception=True)
        traveller = traveller_serializer.save()
        print(traveller)

        return Response(status=status.HTTP_200_OK)
        # return super().create(request, *args, **kwargs)

    # def destroy(self, request, *args, **kwargs):
    #     return super().destroy(request, *args, **kwargs)
    # @action(methods=['GET'],permission_classes=[permissions.IsAdminUser],authentication=[authentication.BasicAuthentication],detail=False)
    # def list(self, request, *args, **kwargs):
    #     return super().list(request, *args, **kwargs)


# # View for user login
# class UserLoginView(APIView):
#   renderer_classes = [UserRenderer]
#   def post(self, request, format=None):
#     serializer = UserLoginSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     username = serializer.data.get('username')
#     password = serializer.data.get('password')
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         token = get_tokens_for_user(user)
#         user_info = UserProfileSerializer(user)
#         return Response({'token':token, 'info':user_info.data}, status=status.HTTP_200_OK)
#     else:
#         Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)
class BusinessViewSet(viewsets.ModelViewSet):
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

    @action(
        methods=["POST"], permission_classes=[], authentication_classes=[], detail=False
    )
    def create_user(self, request, *args, **kwargs):
        data = request.data
        base_user = {"username": data["username"], "password": data["password"]}
        data["base_user"] = base_user
        interests = data["interests"]
        # print(interests)
        # traveller_serializer.

        data["interests"] = []
        for interest in interests:
            # print(interest)
            data["interests"].append({"name": interest})

        # data['interests']=None
        # print(data)
        # print(data['interests'])
        traveller_serializer = self.serializer_class(data=data)
        traveller_serializer.is_valid(raise_exception=True)
        traveller = traveller_serializer.save()
        print(traveller)

        return Response(status=status.HTTP_200_OK)
        # return super().create(request, *args, **kwargs)


class PackageViewSet(viewsets.ModelViewSet):
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

    def get_traveller(username):
        user = User.objects.get(username=username)
        traveller = Travellers.objects.get(base_user=user.pk)
        return traveller

    @action(methods=["GET"], detail=False)
    def recommendations(self, request):
        traveller = self.get_traveller(request.data["username"])
        matching_users = (
            Package.objects.filter(label__name__in=traveller.interests)
            .annotate(matched_labels=Count("label"))
            .order_by("-matched_labels")
        )

    @action(methods=["GET"], detail=False)
    def trending(self, request):
        traveller = self.get_traveller(request.data["username"])


class EventViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_traveller(username):
        user = User.objects.get(username=username)
        traveller = Travellers.objects.get(base_user=user.pk)
        return traveller

    @action(methods=["GET"], detail=False)
    def recommendations(self, request):
        traveller = self.get_traveller(request.data["username"])
        matching_users = (
            Event.objects.filter(label__name__in=traveller.interests)
            .annotate(matched_labels=Count("label"))
            .order_by("-matched_labels")
        )

    # @action(methods=["GET"],detail=False)
    # def trending(self,request):
    #     traveller =self.get_traveller(request.data['username'])
    @action(
        methods=["POST"], permission_classes=[], authentication_classes=[], detail=False
    )
    def create_event(self, request, *args, **kwargs):

        data = request.data
        labels = data["label"]
        # print(interests)
        # event_serializer.

        data["label"] = []
        for label in labels:
            # print(interest)
            data["label"].append({"name": label})

        # data['interests']=None
        # print(data)
        # print(data['interests'])
        event_serializer = self.serializer_class(data=data)
        event_serializer.is_valid()
        event = event_serializer.save()
        print(event)

        return Response(status=status.HTTP_200_OK)
        # return super().create(request, *args, **kwargs


class PostViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Post.objects.all().order_by("-created_at")
    serializer_class = PostSerializer

    def get_traveller(username):
        user = User.objects.get(username=username)
        traveller = Travellers.objects.get(base_user=user.pk)
        return traveller

    @action(methods=["GET"], detail=False)
    def recommendations(self, request):
        traveller = self.get_traveller(request.data["username"])
        matching_users = (
            Post.objects.filter(label__name__in=traveller.interests)
            .annotate(matched_labels=Count("label"))
            .order_by("-matched_labels")
        )

    # @action(methods=["GET"],detail=False)
    # def trending(self,request):
    #     traveller =self.get_traveller(request.data['username'])
    @action(
        methods=["POST"], permission_classes=[], authentication_classes=[], detail=False
    )
    def create_post(self, request, *args, **kwargs):
        # request = request.copy()
        data = request.data
        labels = data["label"]
        # print(interests)
        # post_serializer.
        # base_user={
        #     'username': data['username'],
        #     'password':data['password'],
        #     'email':data['email']
        # }
        data["base_user"] = User.objects.get(username=data["username"]).pk
        data["label"] = []
        for label in labels:
            # print(interest)
            data["label"].append({"name": label})

        # data['interests']=None
        # print(data)
        # print(data['interests'])
        
        post_serializer = self.serializer_class(data=data)
        post_serializer.is_valid(raise_exception=True)
        post = post_serializer.save()
        # print(post)
        # list = self.queryset
        # data = PostSerializer(list, many=True).data
        # print(data)
        return Response(status=status.HTTP_200_OK)
        # return super().create(request, *args, **kwargs
        
import google.generativeai as genai
import os
from dotenv import load_dotenv
load_dotenv()
genai.configure(api_key=os.environ.get("API_KEY"))
class ChatbotViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset=None
    def create(self, request, *args, **kwargs):
        prompt = request.data['prompt']
#         curl \
#   -H 'Content-Type: application/json' \
#   -d '{"contents":[{"parts":[{"text":"Explain how AI works"}]}]}' \
#   -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY'
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        # print(response.text)

        return Response(data=response.text,status=status.HTTP_200_OK)
        # return super().list(request, *args, **kwargs)
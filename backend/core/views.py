from django.shortcuts import render
from rest_framework import viewsets,permissions,authentication
from core.models import User
from core.serializers import UserSerializer
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


class UserRegistrationViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self,request):
        pass

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

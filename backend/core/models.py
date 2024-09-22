from django.contrib.auth.models import AbstractUser
from django.db import models


# Custom User model extending Django's AbstractUser
class User(AbstractUser):
    
    def __str__(self):
        return self.username

# Post model for handling User posts.
# class Post(models.Model):
#     description = models.TextField()
#     created_at = models.DateTimeField(auto_now=True)
#     base_user = models.ForeignKey(User, on_delete=models.CASCADE)
#     img = models.ImageField(upload_to='core/post/images', null=True, blank=True)

#     def __str__(self):
#         return self.description

# # Model for handling Post comments.
# class PostComment(models.Model):
#     post = models.ForeignKey(Post, on_delete=models.CASCADE)
#     comment = models.CharField(max_length=255)
#     commented_by = models.ForeignKey(User, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.comment

# # Model for handling Post likes.
# class PostLike(models.Model):
#     post = models.ForeignKey(Post, on_delete=models.CASCADE)
#     liked_by = models.OneToOneField(User, on_delete=models.CASCADE)

class Label(models.Model):
    name = models.CharField(max_length=255)
    

class Travellers(models.Model):
    base_user = models.ForeignKey(User,on_delete=models.CASCADE)
    interests = models.ManyToManyField(Label,blank=True)

class Business(User):
    base_user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="Business")
    
class Guide(User):
    base_user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="Guide")
    label = models.ManyToManyField(Label)


class Package(models.Model):
    name = models.CharField(max_length=255)
    label = models.ManyToManyField(Label)
    business = models.ForeignKey(Business,related_name="packages",on_delete=models.CASCADE)
    img = models.ImageField(upload_to='core/post/images', null=True, blank=True)
    price = models.FloatField(default=0.0)
    description= models.TextField(blank=True, default="")
    guide = models.ForeignKey(Guide, on_delete=models.CASCADE, null=True, default=None)
    
class PackageLike(models.Model):
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    liked_by = models.OneToOneField(User, on_delete=models.CASCADE)


class Event(models.Model):
    name = models.CharField(max_length=255)
    label = models.ManyToManyField(Label)
    img = models.ImageField(upload_to='core/post/images', null=True, blank=True)
    # price = models.FloatField(default=0.0)
    description= models.TextField(blank=True, default="")
    # guide = models.ForeignKey(Guide, on_delete=models.CASCADE, null=True, default=None)
    
class EventLike(models.Model):
    event = models.ForeignKey(Event,on_delete=models.CASCADE)
    liked_by = models.OneToOneField(User,on_delete=models.CASCADE)
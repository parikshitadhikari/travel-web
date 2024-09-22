from django.contrib.auth.models import AbstractUser
from django.db import models


# Custom User model extending Django's AbstractUser
class User(AbstractUser):
    
    def __str__(self):
        return self.username

# Post model for handling User posts.
class Post(models.Model):
    description = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='core/post/images', null=True, blank=True)

    def __str__(self):
        return self.description
    

# Model for handling Post comments.
class PostComment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)
    commented_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment

# Model for handling Post likes.
class PostLike(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    liked_by = models.OneToOneField(User, on_delete=models.CASCADE)

class Label(models.Model):
    name = models.CharField()
    

class Travellers(models.Model):
    user = models.ForeignKey(User)
    interests = models.ManyToManyField(Label)

class Package(models.Model):
    name = models.CharField()
    label = models.ManyToManyField(Label)
    
class Business(User):
    user = models.ForeignKey(User)
    packages = models.ManyToManyField(Package)
    
class Guide(User):
    user = models.ForeignKey(User)
    label = models.ManyToManyField(Label)
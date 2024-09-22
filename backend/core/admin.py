from django.contrib import admin
from .models import User,Business,Travellers,Label
# Register your models here.
admin.site.register(User)
# admin.site.register(Business)
admin.site.register(Travellers)
admin.site.register(Label)
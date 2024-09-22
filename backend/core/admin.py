from django.contrib import admin
from .models import User,Business,Travellers,Label,Event
# Register your models here.
admin.site.register(User)
# admin.site.register(Business)
admin.site.register(Travellers)
admin.site.register(Label)
admin.site.register(Event)
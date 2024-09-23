# Generated by Django 5.1.1 on 2024-09-23 19:21

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_guide_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packagesubscription',
            name='subscribed_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

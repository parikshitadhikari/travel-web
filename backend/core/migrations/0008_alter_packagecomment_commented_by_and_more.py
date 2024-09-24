# Generated by Django 5.1.1 on 2024-09-24 07:07

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_packagecomment_commented_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packagecomment',
            name='commented_by',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='packagecomment',
            name='package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.package'),
        ),
    ]

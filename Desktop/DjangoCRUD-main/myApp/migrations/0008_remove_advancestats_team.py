# Generated by Django 4.2.4 on 2023-10-01 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0007_advancestats_team'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='advancestats',
            name='team',
        ),
    ]

# Generated by Django 4.2.4 on 2023-10-01 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0005_advancestats_games_played_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancestats',
            name='player_efficiency_rating',
            field=models.FloatField(default=0.0),
        ),
    ]

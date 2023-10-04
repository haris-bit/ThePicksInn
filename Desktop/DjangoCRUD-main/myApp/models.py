from django.db import models

# Create your models here.

# model for advanced statistics
class AdvanceStats(models.Model):
    name = models.CharField(max_length=200, null=False, default='') 
    # team = models.CharField(max_length=200, null=True, default='')
    minutes_played =  models.PositiveIntegerField(default=0)
    games_played = models.PositiveIntegerField(default=0)
    three_point_attempt_rate =  models.FloatField(default=0.0)
    total_rebound_percentage = models.CharField(max_length=200, null=False, default='')
    player_efficiency_rating = models.FloatField(default=0.0)
    win_shares = models.FloatField(default=0.0)
    win_shares_per_48_minutes = models.FloatField(default=0.0)
    box_plus_minus = models.FloatField(default=0.0)
    value_over_replacement_player = models.FloatField(default=0.0)

    def __str__(self):
                return f"AdvanceStats for WS: {self.name}, {self.win_shares}, WS/48: {self.win_shares_per_48_minutes}, BPM: {self.box_plus_minus}, VORP: {self.value_over_replacement_player}"

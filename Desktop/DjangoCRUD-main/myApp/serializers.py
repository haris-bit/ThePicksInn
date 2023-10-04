# this will describe the process of going from a python object to json

from rest_framework import serializers
from .models import AdvanceStats

class AdvanceStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvanceStats
        fields = '__all__'
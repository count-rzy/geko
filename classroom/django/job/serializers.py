from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):
    total_salary = serializers.ReadOnlyField()

    class Meta:
        model = Job
        fields = "__all__"
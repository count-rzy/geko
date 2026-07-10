from django.contrib import admin
from .models import Job


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "worker_name",
        "work_date",
        "hours",
        "hourly_rate",
        "total_salary",
    )
from django.db import models


class Job(models.Model):
    worker_name = models.CharField(max_length=100)
    work_date = models.DateField()
    hours = models.DecimalField(max_digits=5, decimal_places=2)
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2)

    @property
    def total_salary(self):
        return self.hours * self.hourly_rate

    def __str__(self):
        return self.worker_name
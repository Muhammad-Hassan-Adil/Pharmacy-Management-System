from django.db import models

class Medicine(models.Model):
    name=models.CharField("Name",max_length=100)
    salt=models.CharField("Salt",max_length=100)
    expiry=models.DateField("Expiry",max_length=100)
    registrationDate=models.DateField("Registration Date",auto_now_add=True)

    def _str_(self):
        return self.name

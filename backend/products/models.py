from django.db import models
from brand.models import Brand

class Product(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    tamanho = models.FloatField()
    image = models.ImageField(upload_to='snkrs-img/')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=False, null=False)
    price = models.FloatField()
    description = models.CharField(max_length=400)

    def __str__(self):
        return self.name
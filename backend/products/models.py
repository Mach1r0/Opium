from django.db import models
from brand.models import Brand
from core.models import TimeStampedModel   

class Category(TimeStampedModel):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    icon = models.ImageField(upload_to='ctg-img', blank=True)

    def __str__(self):
        return self.name

class Product(TimeStampedModel):
    TYPE = [
        ('tshirt', 'T-Shirt'), 
        ('sneaker', 'Sneaker'),
        ('pants', 'Pants'), 
    ]

    type = models.CharField(choices=TYPE, max_length=40, verbose_name="Product Type")
    name = models.CharField(max_length=50, null=False, blank=False, verbose_name="Product Name")
    quantity = models.PositiveIntegerField(verbose_name="Quantity in Stock")
    size = models.FloatField(verbose_name="Size")
    image = models.ImageField(upload_to='snkrs-img/', verbose_name="Product Image")
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=False, null=False, related_name="products")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Price")
    description = models.CharField(max_length=400, verbose_name="Description")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="products")

    def __str__(self):
        return self.name
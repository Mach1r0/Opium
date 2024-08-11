# cart/models.py
from django.db import models
from django.conf import settings
from products.models import Product
from user.models import User
from core.models import TimeStampedModel

class Cart(TimeStampedModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.PositiveIntegerField()

    def __str__(self):
        return f"Cart of {self.user.username} with {self.product.name}"
    
class CartItem(TimeStampedModel):
    cart = models.ForeignKey(Cart, related_name='cart_item', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='card_product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity} of {self.product.name} in cart of {self.cart.user.username}"
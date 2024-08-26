from django.db import models
from products.models import Product
from core.models import TimeStampedModel
from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import IntegrityError
import logging

logger = logging.getLogger(__name__)
User = get_user_model()

class Cart(TimeStampedModel):
    user = models.OneToOneField(User, related_name="user_cart", on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0, blank=True, null=True)

    def __str__(self):
        return f"Cart of {self.user.username}"

@receiver(post_save, sender=User)
def create_user_cart(sender, instance, created, **kwargs):
    if created:
        try:
            Cart.objects.create(user=instance)
        except IntegrityError as e:
            logger.error(f"Failed to create cart for user {instance.username}: {e}")

class CartItem(TimeStampedModel):
    cart = models.ForeignKey(Cart, related_name="cart_items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name="cart_products", on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.product.name} in cart of {self.cart.user.username}"
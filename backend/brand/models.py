from django.db import models

class Brand(models.Model):
    nome = models.CharField(max_length=100)
    image = models.ImageField(upload_to='brand-image/', blank=True, null=True)
    description = models.CharField(max_length=400, blank=True, null=True)

    def __str__(self):
        return self.nome  


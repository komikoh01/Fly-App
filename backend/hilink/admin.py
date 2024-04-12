from django.contrib import admin
from .models import  Vuelo, Pasajero, Reserva

# Register your models here.
admin.site.register(Vuelo)
admin.site.register(Reserva)
admin.site.register(Pasajero)
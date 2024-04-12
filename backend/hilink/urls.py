from django.urls import path, include
from rest_framework import routers
from hilink import views

router = routers.DefaultRouter()

router.register(r'Usuario', views.UsuarioView, 'usuario')
router.register(r'Pasajero', views.PasajeroView, 'pasajero')
router.register(r'Reserva', views.ReservaView, 'reserva')
router.register(r'Vuelo', views.VueloView, 'vuelo')

urlpatterns = router.urls
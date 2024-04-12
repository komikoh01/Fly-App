from rest_framework import viewsets
from .models import Pasajero, Reserva, Vuelo, Usuario
from .serializer import PasajeroSerializer, VueloSerializer, ReservaSerializer, UsuarioSerializer

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    
class PasajeroView(viewsets.ModelViewSet):
    serializer_class = PasajeroSerializer
    queryset = Pasajero.objects.all()
    
class ReservaView(viewsets.ModelViewSet):
    serializer_class = ReservaSerializer
    queryset = Reserva.objects.all()
    
class VueloView(viewsets.ModelViewSet):
    serializer_class = VueloSerializer
    queryset = Vuelo.objects.all()
    
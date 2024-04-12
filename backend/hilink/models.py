# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Aereopuerto(models.Model):
    id_aero = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=255, blank=True, null=True)
    id_ciudad = models.ForeignKey('Ciudad', models.DO_NOTHING, db_column='id_ciudad', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'aereopuerto'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Avion(models.Model):
    id_avion = models.IntegerField(primary_key=True)
    tipo = models.CharField(max_length=255, blank=True, null=True)
    capacidad = models.IntegerField(blank=True, null=True)
    alcance = models.CharField(max_length=255, blank=True, null=True)
    vel_crucero = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'avion'


class AvionAeropuerto(models.Model):
    id_aero = models.OneToOneField(Aereopuerto, models.DO_NOTHING, db_column='id_aero', primary_key=True)  # The composite primary key (id_aero, id_avion) found, that is not supported. The first column is selected.
    id_avion = models.ForeignKey(Avion, models.DO_NOTHING, db_column='id_avion')

    class Meta:
        managed = False
        db_table = 'avion_aeropuerto'
        unique_together = (('id_aero', 'id_avion'),)


class AvionCarga(models.Model):
    id_ac = models.IntegerField(primary_key=True)
    tipo_carga = models.CharField(max_length=255, blank=True, null=True)
    id_avion = models.ForeignKey(Avion, models.DO_NOTHING, db_column='id_avion', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'avion_carga'


class AvionFabricante(models.Model):
    id_fabricante = models.IntegerField(primary_key=True)
    fabricante = models.CharField(max_length=255, blank=True, null=True)
    id_avion = models.ForeignKey(Avion, models.DO_NOTHING, db_column='id_avion', blank=True, null=True)
    id_fab = models.ForeignKey('self', models.DO_NOTHING, db_column='id_fab', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'avion_fabricante'
        unique_together = (('id_avion', 'id_fab'),)


class AvionSegmentoVuelo(models.Model):
    id_avion = models.OneToOneField(Avion, models.DO_NOTHING, db_column='id_avion', primary_key=True)  # The composite primary key (id_avion, id_segmento) found, that is not supported. The first column is selected.
    id_segmento = models.ForeignKey('SegmentoVuelo', models.DO_NOTHING, db_column='id_segmento')

    class Meta:
        managed = False
        db_table = 'avion_segmento_vuelo'
        unique_together = (('id_avion', 'id_segmento'),)


class Boleto(models.Model):
    id_bol = models.IntegerField(primary_key=True)
    num_asociado_reserva = models.IntegerField(blank=True, null=True)
    asiento = models.IntegerField(blank=True, null=True)
    id_reserva = models.ForeignKey('Reserva', models.DO_NOTHING, db_column='id_reserva', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'boleto'


class Ciudad(models.Model):
    id_ciudad = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=255, blank=True, null=True)
    cuarentena = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ciudad'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Empleado(models.Model):
    id_emp = models.IntegerField(primary_key=True)
    sexo = models.TextField(blank=True, null=True)
    nombre = models.CharField(max_length=255, blank=True, null=True)
    turno_trabajo = models.CharField(max_length=255, blank=True, null=True)
    fecha_contrato = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'empleado'


class Fabricante(models.Model):
    id_fabricante = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=255, blank=True, null=True)
    cuarentena = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fabricante'


class Horario(models.Model):
    id_horario = models.IntegerField(primary_key=True)
    horario = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'horario'


class Pasajero(models.Model):
    id_pasajero = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=255, blank=True, null=True)
    apellido = models.CharField(max_length=255)
    telefono = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'pasajero'


class Reserva(models.Model):
    id_reserva = models.IntegerField(primary_key=True)
    fecha_caducidad = models.DateField(blank=True, null=True)
    chequeada = models.BooleanField()
    id_pasajero = models.ForeignKey(Pasajero, models.DO_NOTHING, db_column='id_pasajero', blank=True, null=True)
    id_emp = models.ForeignKey(Empleado, models.DO_NOTHING, db_column='id_emp', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reserva'


class ReservaSegmento(models.Model):
    created_at = models.DateField(blank=True, null=True)
    updated_at = models.DateField(blank=True, null=True)
    id_reserva = models.OneToOneField(Reserva, models.DO_NOTHING, db_column='id_reserva', primary_key=True)  # The composite primary key (id_reserva, id_segmento) found, that is not supported. The first column is selected.
    id_segmento = models.ForeignKey('SegmentoVuelo', models.DO_NOTHING, db_column='id_segmento')

    class Meta:
        managed = False
        db_table = 'reserva_segmento'
        unique_together = (('id_reserva', 'id_segmento'),)


class SegmentoVuelo(models.Model):
    id_segmento = models.IntegerField(primary_key=True)
    fecha = models.DateField(blank=True, null=True)
    hora = models.TimeField(blank=True, null=True)
    clase = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'segmento_vuelo'


class Tramo(models.Model):
    id_tramo = models.IntegerField(primary_key=True)
    id_tp = models.ForeignKey('self', models.DO_NOTHING, db_column='id_tp', blank=True, null=True)
    vuelo_id_vuelo = models.ForeignKey('Vuelo', models.DO_NOTHING, db_column='vuelo_id_vuelo', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tramo'


class Usuario(models.Model):
    ci = models.CharField(db_column='CI', primary_key=True)  # Field name made lowercase.
    contraseña = models.CharField()
    rol = models.CharField()
    nombreusuario = models.CharField(db_column='nombreUsuario')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario'


class Vuelo(models.Model):
    id_vuelo = models.IntegerField(primary_key=True)
    origen = models.CharField(max_length=255, blank=True, null=True)
    destino = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vuelo'


class VueloHorario(models.Model):
    id_vuelo = models.OneToOneField(Vuelo, models.DO_NOTHING, db_column='id_vuelo', primary_key=True)  # The composite primary key (id_vuelo, id_horario) found, that is not supported. The first column is selected.
    id_horario = models.ForeignKey(Horario, models.DO_NOTHING, db_column='id_horario')

    class Meta:
        managed = False
        db_table = 'vuelo_horario'
        unique_together = (('id_vuelo', 'id_horario'),)


class VueloSegmentoVuelo(models.Model):
    id_vuelo = models.OneToOneField(Vuelo, models.DO_NOTHING, db_column='id_vuelo', primary_key=True)  # The composite primary key (id_vuelo, id_segmento) found, that is not supported. The first column is selected.
    id_segmento = models.ForeignKey(SegmentoVuelo, models.DO_NOTHING, db_column='id_segmento')

    class Meta:
        managed = False
        db_table = 'vuelo_segmento_vuelo'
        unique_together = (('id_vuelo', 'id_segmento'),)

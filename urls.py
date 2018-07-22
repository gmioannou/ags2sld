from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^getsld$', views.get_sld, name='get_sld'),
    url(r'^getmap', views.get_map, name='get_map'),
]
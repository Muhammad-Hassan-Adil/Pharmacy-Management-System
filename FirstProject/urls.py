from django.contrib import admin
from django.urls import path, re_path, include
from firstapp import views

urlpatterns = [
    path('', include('firstapp.urls')),
    path('admin/', admin.site.urls),
    path('api/firstapp/medicines/', views.medicine_list),
    path('api/firstapp/medicines/add/', views.medicine_list),
    path('api/firstapp/medicines/<int:pk>/', views.medicines_detail),
    path('api/firstapp/medicines/del/<int:pk>/', views.medicines_del),

]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('landing/', views.landing_view, name='landing'),
    
    path('category-stories/', views.category_stories_view, name='category_stories'),
    # path('categories/<int:category_id>/', views.category_stories_view, name='category'),

    
    path('write-story/', views.write_story_view, name='write_story'),
    path('add_new_content/', views.add_new_content_view, name='add_new_content'),

    
    path('signIn/', views.signIn_view, name='signIn'),# Author login module
    path('signUp/', views.signUp_view, name='signUp'),#Author registration module    
    path('password_reset/', views.password_reset_view, name='password_reset'),
    # path('logout/', views.user_logout, name='logout'),
    
    # path('register/', views.register_view, name='register'),# Categories of story
    # path('register/', views.register_view, name='register'),# Upcoming stories
    # path('register/', views.register_view, name='register'),# Our recent stories
    # path('register/', views.register_view, name='register'),# Our published stories
    # path('register/', views.register_view, name='register'),# Top rated stories

    path('about/', views.about_view, name='about'),
    path('team/', views.team_view, name='team'),
    path('enquiry_form/', views.enquiry_form_view, name='enquiry_form'),#Enquiry Form
    path('copyright/', views.copyright_view, name='copyright'),
    

    path('dashboard/', views.dashboard_view, name='dashboard'),# Author Dashboard
    path('admin/', views.admin_view, name='admin'),# Admin Login
]
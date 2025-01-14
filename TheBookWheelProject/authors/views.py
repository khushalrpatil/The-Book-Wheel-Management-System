from django.shortcuts import render

def home_view(request):
    return render(request, 'landing.html')

def landing_view(request):
    return render(request, 'landing.html')

def signIn_view(request):   
    return render(request, 'signIn.html')

def signUp_view(request):
    return render(request, 'signUp.html')

def password_reset_view(request):
    return render(request, 'password_reset.html')

def category_stories_view(request):
    return render(request, 'category_stories.html')

def write_story_view(request):
    return render(request, 'write_story.html')

def add_new_content_view(request):
    return render(request, 'add_new_content.html')

def about_view(request):
    """Renders the about page."""
    return render(request, 'about.html')

def team_view(request):
    """Renders the team page."""
    return render(request, 'team.html')

def enquiry_form_view(request):
    """Renders the enquiry form page."""
    return render(request, 'enquiry_form.html')

def copyright_view(request):
    """Renders the copyright page."""
    return render(request, 'copyright.html')

def dashboard_view(request):
    """Displays the user dashboard."""
    return render(request, 'dashboard.html')

def admin_view(request):
    """Renders the admin dashboard."""
    return render(request, 'admin.html')

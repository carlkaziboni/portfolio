from django import forms
from .models import Comments

class CommentForm(forms.Form):
    email = forms.EmailField(required=False, label='Email')
    comment = forms.CharField(widget=forms.Textarea, max_length=600, label='Comment')
import os
import sys
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()


class Command(BaseCommand):
    help = 'Create a superuser from environment variables'

    def handle(self, *args, **options):
        # Get environment variables
        username = os.environ.get('DJANGO_SUPERUSER_USERNAME')
        email = os.environ.get('DJANGO_SUPERUSER_EMAIL')
        password = os.environ.get('DJANGO_SUPERUSER_PASSWORD')

        # Check if all required environment variables are set
        if not all([username, email, password]):
            missing_vars = []
            if not username:
                missing_vars.append('DJANGO_SUPERUSER_USERNAME')
            if not email:
                missing_vars.append('DJANGO_SUPERUSER_EMAIL')
            if not password:
                missing_vars.append('DJANGO_SUPERUSER_PASSWORD')
            
            self.stdout.write(
                self.style.ERROR(
                    f'Missing environment variables: {", ".join(missing_vars)}'
                )
            )
            sys.exit(1)

        # Check if superuser already exists
        if User.objects.filter(username=username).exists():
            self.stdout.write(
                self.style.WARNING(
                    f'Superuser "{username}" already exists. Skipping creation.'
                )
            )
            return

        # Create superuser
        try:
            User.objects.create_superuser(
                username=username,
                email=email,
                password=password
            )
            self.stdout.write(
                self.style.SUCCESS(
                    f'Superuser "{username}" created successfully!'
                )
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(
                    f'Error creating superuser: {str(e)}'
                )
            )
            sys.exit(1)

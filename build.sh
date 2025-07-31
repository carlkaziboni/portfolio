#!/usr/bin/env bash
set -o errexit

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Upgrade pip to avoid outdated dependency resolution
pip install --upgrade pip

# Optional: Clear Poetry cache if using Poetry to manage deps (even if requirements.txt is used for pip fallback)
poetry cache clear . --all || true  # won't error if Poetry isn't installed

# Proceed with your standard steps
pip install -r requirements.txt

npm install
npm run build

python manage.py collectstatic --no-input
python manage.py migrate

# Create superuser from environment variables
python manage.py createsuperuser_env

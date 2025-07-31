#!/usr/bin/env bash
set -o errexit

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

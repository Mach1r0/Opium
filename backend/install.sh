#!/bin/bash

# Update the package database and install virtualenv
sudo pacman -Syu --noconfirm virtualenv

# Start one virtualenv
python -m virtualenv .venv

# Activate the venv
source .venv/bin/activate

# Install the requirements
pip install -r requirements.txt

# Make the migrations
python manage.py makemigrations

# Migrate the migrations
python manage.py migrate

# Run the server
python manage.py runserver

# Portfolio Website

A modern Django-powered portfolio website showcasing various projects and achievements. Built with Django backend, React frontend components, and deployed on Render.

## 🌟 Features

- **Modern Tech Stack**: Django 5.2 backend with React 18 frontend components
- **Project Showcase**: Dedicated pages for multiple projects including:
  - Smart Fridge Management System
  - CS50 AI Projects
  - CS50 Web Development Projects  
  - Human-Ed Platform
  - Player Pose Classifier
  - Suggestion System
  - X-Ray Detection System
  - Diageo Hackathon Project
  - Android Applications
- **Interactive Comments**: Visitor feedback system for each project
- **Responsive Design**: Mobile-friendly interface
- **Production Ready**: Configured for deployment on Render with PostgreSQL

## 🏗️ Architecture

### Backend (Django)
- **Framework**: Django 5.2
- **Database**: PostgreSQL (production) / SQLite (development)
- **Authentication**: Custom User model extending AbstractUser
- **Static Files**: Whitenoise for static file serving
- **Environment**: Environment-based configuration with python-dotenv

### Frontend (React + Vite)
- **Build Tool**: Vite for fast development and optimized builds
- **Framework**: React 18 with modern hooks
- **Integration**: django-vite-plugin for seamless Django-React integration
- **Styling**: Component-specific CSS files for each project

### Database Models
- **User**: Extended Django user model
- **Comments**: Project feedback system with email and timestamp tracking

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL (for production)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Set up Python environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   SECRET_KEY=your-secret-key-here
   DATABASE_URL=sqlite:///db.sqlite3  # For local development
   ```

5. **Database Setup**
   ```bash
   python manage.py migrate
   python manage.py createsuperuser_env
   ```

6. **Build Frontend Assets**
   ```bash
   npm run build
   python manage.py collectstatic --no-input
   ```

7. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

### Production Deployment (Render)

The project includes a `build.sh` script for automated deployment on Render:

1. **Environment Variables** (Set in Render dashboard):
   ```env
   SECRET_KEY=your-production-secret-key
   DATABASE_URL=your-postgresql-database-url
   RENDER_EXTERNAL_HOSTNAME=your-app-name.onrender.com
   ```

2. **Build Command**: `./build.sh`
3. **Start Command**: `gunicorn portfolio.wsgi:application`

## 📁 Project Structure

```
portfolio/
├── portfolio/                 # Django project settings
│   ├── settings.py           # Main configuration
│   ├── urls.py              # URL routing
│   └── wsgi.py              # WSGI application
├── home/                     # Main Django app
│   ├── models.py            # Database models
│   ├── views.py             # View functions
│   ├── urls.py              # App-specific URLs
│   ├── forms.py             # Django forms
│   ├── static/home/         # React components & CSS
│   │   ├── index.jsx        # Homepage component
│   │   ├── fridge.jsx       # Project-specific components
│   │   └── *.css            # Component styling
│   ├── templates/home/      # Django templates
│   └── management/commands/ # Custom Django commands
├── build/                    # Vite build output
├── build.sh                 # Deployment script
├── requirements.txt         # Python dependencies
├── package.json             # Node.js dependencies
├── vite.config.js           # Vite configuration
└── manage.py                # Django management script
```

## 🛠️ Technologies Used

### Backend
- **Django 5.2** - Web framework
- **PostgreSQL** - Production database
- **Gunicorn** - WSGI HTTP Server
- **Whitenoise** - Static file serving
- **python-dotenv** - Environment variable management

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **django-vite-plugin** - Django-Vite integration

### Deployment
- **Render** - Hosting platform
- **GitHub** - Version control

## 🎨 Project Pages

The portfolio showcases the following projects:

1. **Smart Fridge** - IoT-enabled refrigerator management system
2. **CS50 AI** - Artificial intelligence projects from Harvard's CS50
3. **CS50 Web** - Web development projects using Django, React, and JavaScript
4. **Human-Ed** - Educational platform development
5. **Player Pose Classifier** - Machine learning for sports analysis
6. **Portfolio** - Meta-project showcasing the portfolio itself
7. **Suggestions System** - Recommendation engine implementation
8. **X-Ray Detection** - Medical imaging analysis with AI
9. **Diageo Hackathon** - Competition project for beverage industry
10. **Android Apps** - Mobile application development

## 💬 Interactive Features

- **Comment System**: Visitors can leave feedback on individual projects
- **Email Integration**: Comments include optional email for follow-up
- **Admin Interface**: Django admin for content management
- **Responsive Design**: Optimized for desktop and mobile viewing

## 🔧 Development

### Adding New Projects

1. Create React component in `home/static/home/`
2. Add corresponding CSS file
3. Update `vite.config.js` input array
4. Add URL pattern in `home/urls.py`
5. Create view function in `home/views.py`
6. Add HTML template in `home/templates/home/`

### Custom Management Commands

The project includes a custom Django command `createsuperuser_env` for creating superusers from environment variables during deployment.

## 📝 License

This project is part of Carl Kaziboni's portfolio. All rights reserved.

## 👤 Author

**Carl Kaziboni**
- Website: [carlkaziboni.co.uk](https://carlkaziboni.co.uk)
- GitHub: [@carlkaziboni](https://github.com/carlkaziboni)

## 🤝 Contributing

This is a personal portfolio project. While contributions are not expected, feedback and suggestions are always welcome!

---

**Live Demo**: [carlkaziboni.co.uk](https://carlkaziboni.co.uk)

# LotusRoot - Quiz Application

LotusRoot is a full-stack web application that allows users to interact with survey questions stored in a MySQL database. The project demonstrates backend integration with Django REST framework and a frontend built with Next.js.

## Features

- **Backend**: Django-based REST API for managing survey questions and responses.
- **Frontend**: Next.js-based user interface for displaying survey questions.
- **Database**: MySQL database to store survey questions and responses.
- **API Integration**: Communication between the backend and frontend using REST API.
- **CORS Enabled**: Django configured to handle cross-origin resource sharing.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Python 3.9+
- Node.js 16+ and npm
- MySQL Server
- Virtual Environment for Python

---

## Backend Setup

### 1. Clone the repository

```bash
git clone https://github.com/cq1314/LotusRoots.git
cd LotusRoots/backend
```
### 2. Set up a Python virtual environment
```bash
python3 -m venv env
source env/bin/activate  # macOS/Linux
env\Scripts\activate      # Windows
```
### 3. Install dependencies
Install all required Python dependencies using the requirements.txt file:

```bash
pip install -r requirements.txt
```

### 4. Set up the database
 Create a MySQL database:
```bash 
CREATE DATABASE quizQuestions;
```

Create a MySQL database:
Update the database credentials in backend/lotusRoot/lotusRoot/settings.py:
```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'quizQuestions',
        'USER': 'your_mysql_user',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

```
Import the quiz questions and responses into a table in the newly created database. Quiz questions and responses can be copy and pasted into the table from "quizQuestions_and_responses.xlsx" within **Non-Code Commits** folder.

Apply migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Run the backend server
```bash
python manage.py runserver
```
Access the API at http://127.0.0.1:8000/api/questions/.

---

## Frontend Setup
---

## Directory Setup

```plaintext
LotusRoots/
├── backend/                     # Django backend
│   ├── lotusRoot/               # Main Django app with settings, URLs, and WSGI
│   │   ├── settings.py          # Django project settings
│   │   ├── urls.py              # Root URL configuration
│   │   ├── wsgi.py              # WSGI application
│   │   └── __init__.py          # App initialization
│   ├── lr_quiz/                 # Quiz app with models and API views
│   │   ├── models.py            # Database models for quiz questions and responses
│   │   ├── views.py             # API views for quiz data
│   │   ├── serializers.py       # DRF serializers for quiz models
│   │   ├── urls.py              # Quiz app-specific URLs
│   │   └── __init__.py          # App initialization
│   └── env/                     # Python virtual environment (optional, excluded in Git)
│       ├── bin/                 # Scripts for virtual environment
│       ├── lib/                 # Installed Python packages
│       ├── include/             # Header files for C extensions
│       └── pyvenv.cfg           # Virtual environment configuration
├── frontend/                    # Frontend directory
│   ├── lotusroot_frontend/      # Next.js frontend application
│   │   ├── src/                 # React components and utilities
│   │   │   ├── components/      # Reusable React components
│   │   │   └── styles/          # CSS or Tailwind styles
│   │   ├── pages/               # Next.js routing pages
│   │   │   ├── index.js         # Main landing page
│   │   │   └── questions.js     # Survey questions display page
│   │   ├── public/              # Static assets like images and fonts
│   │   ├── package.json         # Frontend dependencies
│   │   └── node_modules/        # Installed frontend packages (excluded in Git)
│   └── Quiz Front End/          # Legacy folder (not currently in use)
├── Non-Code Commits/            # Non-code-related files (Excel sheets, etc.)
│   ├── Locations Pg 122-161.xlsx
│   ├── quizQuestions_and_responses.xlsx    # Pregenerated quiz questions and answers
│   ├── sampleResponsePool.xlsx
│   ├── ScreenShots.zip          # Screenshot files for documentation or testing

│   └── SophieAIInformation.xlsx

├── .gitignore                   # Git configuration to exclude files/folders
├── README.md                    # Project documentation
└── requirements.txt             # Backend Python dependencies
```

## Objectives for Future Development

The following lists points for future development:

### 1. OpenAI Chat Text Generation
 Implementing an OpenAI API Key with a chatgpt35-turbo model. The resulting featured list of locations from the quiz can be used as material to prompt the model to generate a more detailed itinerary for pdf download, allowing us to expand upon details such as travel timeline. The model can also be fine-tuned in the future with sample training data in order to achieve consistent formatting.

### 2. Weighted Scoring Algorithm for Location Selections
 Japan hotspot locations listed in the response pool in the database are categorized with secondary characteristics including region and type (historical, nature, food, sports, shopping, etc.) which can be adapted into a more accurate selection algorithm. Quiz questions can be designed so each choice adds a point to a type, and the ending score is a weighted distribution of all location types. Ex. 5 pts food, 3 pts nature, 2 pts shopping produces an itinerary of 5 restuarants, 3 parks, and 2 shopping outlets. 

### 3. Event Search Functionality
 In order to find Japan-related events, a page is to be created with a list of American states. Upon selection of a state you are navigated to a page where event listings can be posted for that location. A survey may also be included where users can submit events to the owner to be posted.



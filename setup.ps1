# FacilityGrip Setup Script for Windows
Write-Host "--- FacilityGrip: AI-Powered Facility Automation ---" -ForegroundColor Cyan

# Check for Python
if (!(Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Error "Python not found. Please install Python 3.10+ from python.org"
    exit 1
}

# Check for Node
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js not found. Please install Node.js from nodejs.org"
    exit 1
}

# 1. Setup Backend
Write-Host "Setting up backend..." -ForegroundColor Green
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
cd ..

# 2. Setup Frontend
Write-Host "Setting up frontend..." -ForegroundColor Green
cd frontend
npm install
cd ..

Write-Host "FacilityGrip setup complete!" -ForegroundColor Cyan
Write-Host "To run the system:"
Write-Host "1. cd backend; .\venv\Scripts\python.exe app\main.py"
Write-Host "2. cd frontend; npm run dev"

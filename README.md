# 🏢 FacilityGrip: AI-Powered Facility Automation

FacilityGrip is an open-source, AI-driven facility management system designed for hotels, parks, churches, schools, and other large-scale infrastructures. Built with **Python** and **TensorFlow**, it provides real-time monitoring, predictive maintenance, and automated reporting to streamline operations.

![FacilityGrip Dashboard](public/screenshot.png) *(Placeholder for UI screenshot)*

## ✨ Features

- 🧠 **AI Anomaly Detection**: Uses TensorFlow autoencoders to identify unusual patterns in sensor data (HVAC vibrations, power surges, etc.).
- 📊 **Predictive Maintenance**: Forecasts equipment failure before it happens, reducing downtime.
- 🏢 **Multi-Facility Support**: Manage multiple buildings, rooms, and assets from a single dashboard.
- 🐳 **Docker Ready**: Easy deployment via Docker and Docker Compose.
- 💻 **Desktop Native**: Lightweight local installation script for Windows PCs.
- 🎨 **Premium UI**: Modern, glassmorphic dashboard built with React and Tailwind CSS.

## 🚀 Getting Started

### Option 1: Local PC Installation (Windows)

1. Clone the repository:
   ```bash
   git clone https://github.com/olivestackscode/facilitygrip.git
   cd facilitygrip
   ```
2. Run the setup script:
   ```powershell
   ./setup.ps1
   ```
3. Start the system:
   - Backend: `cd backend; ./venv/Scripts/python app/main.py`
   - Frontend: `cd frontend; npm run dev`

### Option 2: Docker Deployment

Deploy the entire stack with a single command:
```bash
docker-compose up -d
```
The dashboard will be available at `http://localhost`.

## 🛠 Tech Stack

- **Backend**: Python 3.10+, FastAPI, SQLAlchemy, TensorFlow 2.x
- **Frontend**: React (TS), Vite, Tailwind CSS, Lucide Icons
- **Database**: SQLite (Local) / PostgreSQL (Docker)
- **Deployment**: Docker, Docker Compose

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

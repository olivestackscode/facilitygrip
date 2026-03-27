from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.ml.anomaly_detector import check_sensor_data
import random

app = FastAPI(title="FacilityGrip AI Engine")

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "FacilityGrip AI Engine is running", "status": "online"}

@app.get("/system/status")
async def get_status():
    return {
        "cpu_usage": f"{random.uniform(1, 10):.1f}%",
        "memory_usage": f"{random.uniform(0.5, 2.0):.1f}GB",
        "ml_engine": "TensorFlow 2.15",
        "active_monitors": 12
    }

@app.post("/ml/predict")
async def predict_anomaly(data: list[float]):
    return check_sensor_data(data)

@app.get("/facility/sensors")
async def get_sensors():
    return [
        {"id": "HVAC-01", "name": "Main AC", "status": "Stable", "value": round(random.uniform(18, 24), 1), "unit": "°C"},
        {"id": "PWR-02", "name": "Server Power", "status": "High Load", "value": round(random.uniform(4, 8), 1), "unit": "kW"},
        {"id": "GEN-03", "name": "Backup Gen", "status": "Idle", "value": 0, "unit": "RPM"},
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

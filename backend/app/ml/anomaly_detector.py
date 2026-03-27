import tensorflow as tf
import numpy as np
from typing import List, Dict

class AnomalyDetector:
    def __init__(self):
        self.model = self._build_model()
        self.threshold = 0.5

    def _build_model(self):
        """
        Builds a simple Autoencoder for anomaly detection.
        In a real scenario, this would be trained on historical sensor data.
        """
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(16, activation='relu', input_shape=(10,)),
            tf.keras.layers.Dense(8, activation='relu'),
            tf.keras.layers.Dense(16, activation='relu'),
            tf.keras.layers.Dense(10, activation='sigmoid')
        ])
        model.compile(optimizer='adam', loss='mse')
        return model

    def predict(self, data: np.ndarray) -> bool:
        """
        Predicts if a given set of sensor data is anomalous.
        """
        # For demonstration: if mean value > threshold, it's an anomaly
        # Real logic: reconstruction error from autoencoder
        reconstruction = self.model.predict(data.reshape(1, -1), verbose=0)
        error = np.mean(np.abs(data - reconstruction))
        return error > self.threshold

detector = AnomalyDetector()

def check_sensor_data(sensor_values: List[float]) -> Dict:
    """
    API helper to check sensor data for anomalies.
    """
    data = np.array(sensor_values).flatten()
    # Pad or truncate to match model input shape (10)
    if len(data) < 10:
        data = np.pad(data, (0, 10 - len(data)))
    else:
        data = data[:10]
        
    is_anomaly = detector.predict(data)
    return {
        "is_anomaly": bool(is_anomaly),
        "confidence": 0.85 if is_anomaly else 0.99,
        "message": "Anomaly detected in facility systems" if is_anomaly else "Systems operating normally"
    }

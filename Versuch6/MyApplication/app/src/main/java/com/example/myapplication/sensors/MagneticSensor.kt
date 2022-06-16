package com.example.myapplication.sensors

import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import com.example.myapplication.data.SensorCardData
import com.example.myapplication.data.SensorData

class MagneticSensor(sensorManager: SensorManager) : SensorEventListener, SensorCardData {
    override val sensorTitle = "Magnetfeld"

    override var sensorData: List<SensorData> by mutableStateOf(listOf())

    init {
        sensorManager.registerListener(
            this,
            sensorManager.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD),
            SensorManager.SENSOR_DELAY_NORMAL
        )
    }

    override fun onSensorChanged(event: SensorEvent?) {
        sensorData = listOf(
            SensorData("x", "${event!!.values[0]} μT"),
            SensorData("y", "${event.values[1]} μT"),
            SensorData("z", "${event.values[2]} μT"),
        )
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}

}
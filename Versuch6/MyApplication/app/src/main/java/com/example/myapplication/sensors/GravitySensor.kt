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

class GravitySensor(sensorManager: SensorManager) : SensorEventListener, SensorCardData {
    override val sensorTitle = "Gravitation"

    override var sensorData: List<SensorData> by mutableStateOf(listOf())

    init {
        sensorManager.registerListener(
            this,
            sensorManager.getDefaultSensor(Sensor.TYPE_GRAVITY),
            SensorManager.SENSOR_DELAY_NORMAL
        )
    }

    override fun onSensorChanged(event: SensorEvent?) {
        sensorData = listOf(
            SensorData("x", "${event!!.values[0]} m/s2"),
            SensorData("y", "${event.values[1]} m/s2"),
            SensorData("z", "${event.values[2]} m/s2"),
        )
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}

}
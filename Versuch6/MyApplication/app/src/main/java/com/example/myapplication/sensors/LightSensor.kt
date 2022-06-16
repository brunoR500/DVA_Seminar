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

class LightSensor(sensorManager: SensorManager) : SensorEventListener, SensorCardData {
    override val sensorTitle = "Licht"

    override var sensorData: List<SensorData> by mutableStateOf(listOf())

    init {
        sensorManager.registerListener(
            this,
            sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT),
            SensorManager.SENSOR_DELAY_NORMAL
        )
    }

    override fun onSensorChanged(event: SensorEvent?) {
        sensorData = listOf(SensorData("Lux", "${event!!.values[0]} lx"))
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
        // Wie hoch die Accuracy is: Unreliable, Low, Medium, High
        // see https://stackoverflow.com/questions/32677861/onaccuracychanged-why
    }

}
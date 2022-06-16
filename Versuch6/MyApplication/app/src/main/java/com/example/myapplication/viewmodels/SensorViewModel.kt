package com.example.myapplication.viewmodels

import android.hardware.SensorManager
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.myapplication.data.SensorCardData
import com.example.myapplication.sensors.*

class SensorViewModel(sensorManager: SensorManager) : ViewModel() {
    var sensors: List<SensorCardData> = listOf(
        LightSensor(sensorManager),
        PressureSensor(sensorManager),
        ProximitySensor(sensorManager),
        MagneticSensor(sensorManager),
        GravitySensor(sensorManager),
        RotationSensor(sensorManager),
    )
        private set
}

class SensorViewModelFactory(private val sensorManager: SensorManager) : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T =
        modelClass.getConstructor(SensorManager::class.java).newInstance(sensorManager)
}
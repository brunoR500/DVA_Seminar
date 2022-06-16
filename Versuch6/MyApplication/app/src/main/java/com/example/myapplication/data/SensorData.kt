package com.example.myapplication.data

data class SensorData(val title: String, val value: String)

interface SensorCardData {
    val sensorTitle: String
    val sensorData: List<SensorData>
}
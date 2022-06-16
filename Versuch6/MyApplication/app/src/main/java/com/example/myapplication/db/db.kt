package com.example.myapplication.db

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class SensorDataDB(
    @PrimaryKey(autoGenerate = true) var id: Long = 0L,
    val title: String,
    val value: String,
    val timestamp: Long,
)


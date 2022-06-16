package com.example.myapplication.db

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query

@Dao
interface SensorDao {
    @Query("SELECT * FROM sensorDataDB")
    fun getAll(): List<SensorDataDB>

    @Insert
    fun insertAll(vararg sensorData: SensorDataDB)
}


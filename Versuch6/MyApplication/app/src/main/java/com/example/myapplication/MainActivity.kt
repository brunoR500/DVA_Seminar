package com.example.myapplication

import android.hardware.SensorManager
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.room.Room
import com.example.myapplication.db.AppDatabase
import com.example.myapplication.ui.BaseLayout
import com.example.myapplication.ui.theme.MyApplicationTheme
import com.example.myapplication.viewmodels.SensorViewModel
import com.example.myapplication.viewmodels.SensorViewModelFactory

class MainActivity : ComponentActivity() {
    private val sensorViewModel by viewModels<SensorViewModel> {
        SensorViewModelFactory(getSystemService(SENSOR_SERVICE) as SensorManager)
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val db: AppDatabase =
            Room.databaseBuilder(applicationContext, AppDatabase::class.java, "sensorData").build()
        val dao = db.sensorDao()
        setContent {
            MyApplicationTheme {
                BaseLayout(sensorViewModel, dao)
            }
        }
    }
}

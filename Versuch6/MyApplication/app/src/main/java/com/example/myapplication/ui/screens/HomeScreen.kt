package com.example.myapplication.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Card
import androidx.compose.material.Divider
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.myapplication.data.SensorCardData
import com.example.myapplication.viewmodels.SensorViewModel

@Composable
fun HomeScreen(viewModel: SensorViewModel) {
    LazyColumn {
        items(viewModel.sensors) { sensor -> SensorCard(sensor) }
    }
}

@Composable
fun SensorCard(sensor: SensorCardData) {
    Card(Modifier.padding(4.dp), elevation = 4.dp) {
        Column(Modifier.padding(4.dp)) {
            Text(sensor.sensorTitle, style = MaterialTheme.typography.h5)
            Divider()
            sensor.sensorData.forEach { data ->
                Row {
                    Text("${data.title}: ")
                    Text(data.value)
                }
            }
        }
    }
}
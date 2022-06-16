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
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.myapplication.db.SensorDao
import com.example.myapplication.db.SensorDataDB
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.text.DateFormat
import java.util.*

@Composable
fun RoomScreen(dao: SensorDao) {
    var cards by remember { mutableStateOf(listOf<List<SensorDataDB>>()) }
    LaunchedEffect(dao) {
        this.launch(Dispatchers.IO) {
            cards = dao.getAll().groupBy { it.timestamp }.values.toList()
        }
    }
    LazyColumn {
        items(cards) { card ->
            RoomCard(list = card)
        }
    }
}

@Composable
fun RoomCard(list: List<SensorDataDB>) {
    Card(Modifier.padding(4.dp), elevation = 4.dp) {
        Column(Modifier.padding(4.dp)) {
            Text(
                DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT)
                    .format(Date(list.first().timestamp)), style = MaterialTheme.typography.h5
            )
            Divider()
            list.forEach { data ->
                Row {
                    Text("${data.title}: ")
                    Text(data.value)
                }
            }
        }
    }
}
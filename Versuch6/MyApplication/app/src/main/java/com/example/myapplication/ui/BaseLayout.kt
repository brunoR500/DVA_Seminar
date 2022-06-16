package com.example.myapplication.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Menu
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.myapplication.db.SensorDao
import com.example.myapplication.db.SensorDataDB
import com.example.myapplication.ui.screens.HomeScreen
import com.example.myapplication.ui.screens.RoomScreen
import com.example.myapplication.viewmodels.SensorViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.util.*

enum class Screen(val title: String) {
    HOME("Home"), ROOM("Speicher")
}

@Composable
fun BaseLayout(sensorViewModel: SensorViewModel, dao: SensorDao) {
    val drawerState = rememberDrawerState(DrawerValue.Closed)
    val scaffoldState = rememberScaffoldState(drawerState)
    val scope = rememberCoroutineScope()
    var screen by rememberSaveable { mutableStateOf(Screen.HOME) }
    Scaffold(
        scaffoldState = scaffoldState,
        topBar = {
            TopAppBar(
                title = { Text(screen.title) },
                navigationIcon = {
                    IconButton({ scope.launch { drawerState.open() } }) {
                        Icon(Icons.Filled.Menu, null)
                    }
                }
            )
        },
        content = {
            when (screen) {
                Screen.HOME -> HomeScreen(sensorViewModel)
                Screen.ROOM -> RoomScreen(dao)
            }
        },
        drawerContent = {
            Drawer(onScreenChange = { changeToScreen ->
                scope.launch { drawerState.close() }
                screen = changeToScreen
            }, screen)
        },
        floatingActionButton = {
            if (screen == Screen.HOME) {
                FloatingActionButton(onClick = {
                    scope.launch(Dispatchers.IO) {
                        val timestamp = Date().time
                        sensorViewModel.sensors.map { it.sensorData }.forEach { list ->
                            list.forEach {
                                dao.insertAll(
                                    SensorDataDB(
                                        title = it.title,
                                        value = it.value,
                                        timestamp = timestamp
                                    )
                                )
                            }
                        }
                    }
                }) {
                    Icon(Icons.Filled.Add, null)
                }
            }
        }
    )
}

@Composable
fun Drawer(onScreenChange: (Screen) -> Unit, currentScreen: Screen) {
    Column {
        Surface(elevation = 8.dp, color = MaterialTheme.colors.primarySurface) {
            Box(
                Modifier
                    .fillMaxWidth()
                    .height(80.dp)
                    .padding(8.dp)
            ) {
                Text(
                    "Sensors",
                    Modifier.align(Alignment.BottomStart),
                    style = MaterialTheme.typography.h6,
                    color = Color.White
                )
            }
        }
        Screen.values().forEach { screen ->
            Text(
                screen.title,
                Modifier
                    .clickable(onClick = { onScreenChange(screen) })
                    .align(Alignment.CenterHorizontally)
                    .fillMaxWidth()
                    .padding(16.dp),
                fontSize = 20.sp,
                color = if (screen == currentScreen) MaterialTheme.colors.primary else MaterialTheme.colors.onBackground
            )
        }
    }
}

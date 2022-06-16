package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", CurrentTime)
	http.ListenAndServe(":8080", nil)
}

func CurrentTime(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, time.Now().String())
}


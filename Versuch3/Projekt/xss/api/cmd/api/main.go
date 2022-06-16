package main

import (
	"net/http"
	"context"
	"github.com/go-redis/redis/v8"
	"time"
	"encoding/json"
)

var rdb *redis.Client

func main() {
	rdb = redis.NewClient(&redis.Options{
		Addr:	"redis:6379",
		Password: "",
		DB:		0,
	})
	http.HandleFunc("/messages", GetMessages)
	http.HandleFunc("/post", AddMessage)
	http.ListenAndServe(":8080", nil)
}

func AddMessage(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), time.Duration(2) * time.Second)
	defer cancel()
	message := r.URL.Query().Get("message")
	if message == "" {
		http.Error(w, "Message is empty", 400)
	}
	rdb.LPush(ctx, "messages", message)
	w.WriteHeader(200)
}

func GetMessages(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), time.Duration(2) * time.Second)
	defer cancel()
	data, _ := rdb.LRange(ctx, "messages", 0, 10).Result()
	w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(data)
}

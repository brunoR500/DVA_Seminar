FROM golang:latest
WORKDIR /code
EXPOSE 8080
COPY . .
ENV GO111MODULE=on
RUN go get github.com/go-redis/redis/v8
CMD ["go", "run", "cmd/api/main.go"]
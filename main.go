package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

var (
	_ = fmt.Print
	_ = http.ListenAndServe
	_ = os.Getenv
	_ = log.Print
	_ = gin.Default
	_ = rand.Int
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*.html")
	router.GET("/", GetIndex)

	router.Run(":8080")
	time.Sleep(time.Second * 5)
}

func GetIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}
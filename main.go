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
	_ = time.Sleep
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*.html")
	r.GET("/", GetIndex)

	err := r.Run(":8080")
	if err != nil {
		log.Fatal(err)
	}
}

func GetIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}
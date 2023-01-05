package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	fmt.Print("Hello World!")

	e := echo.New()

	e.GET("/healthcheck", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})

	e.Logger.Fatal(e.Start(":4000"))
}

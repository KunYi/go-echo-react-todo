package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Todo struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
	Body  string `json:"body"`
}

func main() {
	fmt.Print("Hello World!")

	e := echo.New()
	todos := []Todo{}

	e.GET("/healthcheck", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})

	e.POST("/api/todos", func(c echo.Context) error {
		todo := &Todo{}

		if err := c.Bind(todo); err != nil {
			return err
		}

		todo.ID = len(todos) + 1

		todos = append(todos, *todo)

		return c.JSON(http.StatusCreated, todos)
	})

	e.Logger.Fatal(e.Start(":4000"))
}

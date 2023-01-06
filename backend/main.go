package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
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

	/* add CORS policy */
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:5173", "http://192.168.*:5173"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

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

	e.GET("/api/todos", func(c echo.Context) error {
		return c.JSON(http.StatusAccepted, todos)
	})

	e.PATCH("/api/todos/:id/done", func(c echo.Context) error {
		id, err := strconv.Atoi(c.Param("id"))

		if err != nil {
			return c.String(http.StatusBadRequest, "Invalid id")
		}

		var found = false
		for i, t := range todos {
			if t.ID == id {
				todos[i].Done = true
				found = true
				break
			}
		}

		if found {
			return c.JSON(http.StatusAccepted, todos)
		}
		return c.String(http.StatusBadRequest, "Invalid id")
	})

	e.Logger.Fatal(e.Start(":4000"))
}

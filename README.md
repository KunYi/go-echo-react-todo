make Todo App use golang with ECHO framework + React + Typescript

the repository code reference another project [go-react-todo](https://github.com/KunYi/go-react-todo)

### Tips: show git log from first to latest
```
 $ git log --oneline --reverse
```

Step by Step

1. prepare backend/server and frontend/UI  # initial commit
```
 # check this repository 1'st commit
 $ mkdir go-echo-react-todo
 $ cd go-echo-react-todo
 $ mkdir backend
 $ cd backend
 $ go mod init github.com/<your account>/<your repository>
 $ go get -u github.com/labstack/echo/v4
 $ cd ..  # back to 'go-echo-react-todo'
 $ yarn create vite frontend --template react-ts  # create frontend project
```

2. create backend server with API '/healthcheck'
```
# check this repository 2'nd commit
# we to create ./backend/main.go file and wrote some code for test

$ cd backend # change workdir into 'backend'
$ go run main.go # launch server, press ctrl+'C' to break the server

# you can use 'curl' to check the state of server
$ curl -X GET localhost:4000/healthcheck
# response
OK
```

3. create new API '/api/todos' for add Todo item
```
# check this repository 3'rd commit
# add some code snippet into ./backend/main.go

$ cd backend # change workdir into 'backend'
$ go run main.go # launch server, press ctrl+'C' to break the server
# you can use 'curl' to check the state of server
$ curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "title":"Testing", "body":"write 3rd commit" }' \
  localhost:4000/api/todos
# response
[{"id":1,"title":"Testing","done":false,"body":"write 3rd commit"}]
```

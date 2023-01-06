make Todo App use golang with ECHO framework + React + Typescript
===

the repository code reference another project [go-react-todo](https://github.com/KunYi/go-react-todo)

### Tips: show git log from first to latest
```
 $ git log --oneline --reverse
```

## Step by Step

### 1. prepare backend/server and frontend/UI  # initial commit
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

### 2. create backend server with API '/healthcheck'
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

### 3. create new API '/api/todos' for add Todo item
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
### 4. initial frontend development environment
```
# check this repository 4'th commit

# use NodeJS LTS 16.19.0
$ cd frontend
$ yarn add @mantine/hooks @mantine/core swr @primer/octicons-react
$ yarn dev # launch testing server
# use browser to visit http://localhost:5173/ for check status
```
### 5. modify UI to show 'Hello World'
```
# check this repository 5'th commit
$ cd frontend
$ yarn dev # launch testing server
# use browser to visit http://localhost:5173/ for check status
# and modify './frontend/index.html' and './frontend/src/App.tsx' like this commit
# Web Browser will auto reload modify result when save file
```
### 6. modify UI for show Todo items
```
# check this repository 6'th commit

# add more packages for mantine v5
$ cd frontend
$ yarn add @emotion/cache @emotion/react @emotion/serialize @emotion/utils

# modify './frontend/src/App.tsx' like this commit
# to implement fetch API 'localhost:4000/api/todos'
```
Use **Inspect(DevTool)** of Browser to check status
will show **'Status code:405, CROS Missing Allow Origin'** in **Network** of Inspect.
Next step will fixed the issues

### 7. fixed server code
```
# check this repository 7'th commit

# to get middleware of ECHO
$ cd backend
$ go get -u github.com/labstack/echo/v4/middleware
# modify './backend/main.go' like this commit
```
the commit implement API '/api/todos' by GET method and allow 'localhost:5173' fetch

### 8. implement dialog 'AddTodo' in frontend
```
# check this repository 8'th commit
```
add file 'AddTodo.tsx' into './frontend/src/components' and modify ./frontend/src/App.tsx' for dialog AddTodo

### 9. complete AddTodo
```
# check this repository 9'th commit

# install new package for dialog 'AddTodo'
$ cd frontend
$ yarn add @mantine/form
```
modify './frontend/src/App.tsx' and ./frontend/src/components/AddTodo.tsx like this commit
will invoke /api/todos to create a todo item

### 10. implement new API for done todo item
```
# check this repository 10'th commit
```
implement new API **'/api/todos/:id/done'**, to modify './backend/main.go' like this commit

### 11. complete done action of frontend
```
# check this repository 11'th commit
```
modify './frontend/src/App.tsx' like this commit

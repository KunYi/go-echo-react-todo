make Todo App use golang with ECHO framework + React + Typescript

the repository code reference another project [go-react-todo](https://github.com/KunYi/go-react-todo)


Step by Step

1. prepare backend/server and frontend/UI  # initial commit
```
 $ mkdir go-echo-react-todo
 $ cd go-echo-react-todo
 $ mkdir backend
 $ cd backend
 $ go mod init github.com/<your account>/<your repository>
 $ go get -u github.com/labstack/echo/v4
 $ cd ..  # back to 'go-echo-react-todo'
 $ yarn create vite frontend --template react-ts  # create frontend project
```

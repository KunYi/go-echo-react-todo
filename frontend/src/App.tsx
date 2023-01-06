import { useState } from 'react'
import { Box, MantineProvider } from '@mantine/core'
import useSWR from 'swr'
import './App.css'
import AddTodo from './components/AddTodo'


export const ENDPOINT = window.location.protocol + "//" + window.location.hostname + ":4000"
export interface Todo {
  id: number
  title: string
  body: string
  done: boolean
}

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {JSON.stringify(data)}
      <Box>
        <AddTodo mutate={mutate} />
      </Box>
    </MantineProvider>
  )
}

export default App

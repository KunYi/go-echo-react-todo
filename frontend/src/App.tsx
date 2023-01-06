import { useState } from 'react'
import { Box, List, MantineProvider, ThemeIcon } from '@mantine/core'
import useSWR from 'swr'
import './App.css'
import AddTodo from './components/AddTodo'
import { CheckCircleFillIcon } from '@primer/octicons-react'


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

  async function markTodoAdDone(id: number) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) => {
          return (
            <List.Item
              onClick={() => markTodoAdDone(todo.id)}
              key={`todo_list__${todo.id}`}
              icon={
                todo.done ? (
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon color="gray" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                )
              }
            >
              {todo.title}
            </List.Item>
          );
        })}
      </List>
      <Box>
        <AddTodo mutate={mutate} />
      </Box>
    </MantineProvider>
  )
}

export default App

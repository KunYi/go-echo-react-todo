import { useState } from 'react'
import { Box, MantineProvider } from '@mantine/core'
import useSWR from 'swr'
import './App.css'


export const ENDPOINT = window.location.protocol + "//" + window.location.hostname + ":4000"

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

function App() {
  const { data, mutate } = useSWR('api/todos', fetcher)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {JSON.stringify(data)}
      <Box>
        Hello world
      </Box>
    </MantineProvider>
  )
}

export default App

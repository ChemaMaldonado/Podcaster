import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CACHE_TIME } from './constants/constants'
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME,
      cacheTime: CACHE_TIME,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

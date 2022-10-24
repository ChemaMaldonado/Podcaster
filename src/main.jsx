import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CACHE_TIME } from './constants/constants'
import { NavigationProvider } from './services/context/navigation/provider'
import React from 'react'
import ReactDOM from 'react-dom/client'

/*
  This is the custom configuration for the React Query client.
  In our case once the request is done we cache the results for one day.
*/
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
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

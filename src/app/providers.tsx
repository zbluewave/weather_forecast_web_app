'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from "react";
import { WeatherSearchProvider } from '@/context/weatherSearchContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
      <WeatherSearchProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WeatherSearchProvider>
  )
}

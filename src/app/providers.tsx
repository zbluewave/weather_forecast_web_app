'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from "react";
import { WeatherSearchProvider } from '@/context/weatherSearchContext'
import { UnitProvider } from '@/context/unitContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
      <UnitProvider>
          <WeatherSearchProvider>
              <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </WeatherSearchProvider>
      </UnitProvider>
  )
}

'use client'

import { AuthProvider } from '@/features/auth';
import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'

import { ReactNode } from "react";

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    })
}

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
    if(isServer) {
        return makeQueryClient()
    }

    if(!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
}

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute={'class'} defaultTheme='light' enableSystem>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}
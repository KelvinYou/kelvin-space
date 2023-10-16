import DashboardLayout from '@/components/layout/Layout'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/style/main.scss";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelvin You | Space',
  description: 'A space that to record my love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DashboardLayout>
          {children}
          </DashboardLayout>
        </ThemeProvider>
        
        <Toaster />
      </body>
    </html>
  )
}

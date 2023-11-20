import DashboardLayout from '@/components/layout/Layout'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/style/main.scss";
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from '@/components/ui/tooltip';
import { Locale, i18n } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelvin You | Space',
  description: 'A space that to record my love',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout = ({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) => {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <DashboardLayout lang={params.lang}>
            {children}
            </DashboardLayout>
          </TooltipProvider>
        </ThemeProvider>
        
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout;
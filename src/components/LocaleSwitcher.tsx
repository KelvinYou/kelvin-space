'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { i18n } from '@/i18n.config'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleNavigate = (path: string) => {
    router.push(path);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Languages />
            <span className="sr-only">Toggle locale</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {i18n.locales.map(locale => {
            return (
              <DropdownMenuItem key={locale} onClick={() => handleNavigate(redirectedPathName(locale))}>
                {/* <Link
                  href={redirectedPathName(locale)}
                > */}
                  {locale}
                {/* </Link> */}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  )
}

// Reference: 

// https://www.youtube.com/watch?v=1S7yFzU2ulg
// https://locize.com/blog/next-app-dir-i18n/
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const items = [
  {
    name: "Portfolio",
    path: 'https://kelvinyou.vercel.app',
  },
  {
    name: "Github",
    path: 'https://github.com/KelvinYou',
  },
  {
    name: "Linkedin",
    path: 'https://www.linkedin.com/in/kelvinyou2001/',
  },
]

const ProfileSelector: React.FC = () => {
  const router = useRouter();

  const handleOpen = (path: string) => {
    window.open(path, '_blank');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User2 className="absolute h-[1.2rem] w-[1.2rem]"/>
          <span className="sr-only">Profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) => {
          return (
            <DropdownMenuItem 
            key={index + item.name}
            onClick={() => handleOpen(item.path)}>
              {item.name}
            </DropdownMenuItem>
          )
        })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileSelector
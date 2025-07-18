'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

import { buttonVariants } from './ui/button'

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={cn(
        buttonVariants({
          variant: 'ghost',
        })
      )}
      onClick={() => {
        {
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      }}
    >
      <span className='sr-only'>Toggle mode</span>
      {theme === 'light' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  )
}

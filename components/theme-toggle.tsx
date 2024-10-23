'use client'

import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { IconMoon, IconSun } from '@/components/ui/icons'

function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [, startTransition] = React.useTransition()

  return (
    <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full p-4 font-mono text-xs text-white">
      <Button
        size="icon"
        variant="link"
        onClick={() => {
          startTransition(() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          })
        }}
      >
        {!theme ? null : theme === 'dark' ? (
          <IconMoon className="transition-all" />
        ) : (
          <IconSun className="transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ThemeToggle), { ssr: false })

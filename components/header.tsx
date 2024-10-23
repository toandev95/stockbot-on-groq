import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { buttonVariants } from '@/components/ui/button'
import { IconGitHub, IconSeparator } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

async function UserOrLogin() {
  return (
    <>
      <Link href="https://chat.toandev.space" target="_blank" rel="nofollow">
        <Image src="/logo.png" alt="GroqLabs Logo" width={30} height={30} />
      </Link>
      <div className="flex items-center font-semibold">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <a href="/new">StockBot</a>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/toandev95/stockbot-on-groq/"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-none')}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}

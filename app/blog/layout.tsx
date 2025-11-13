import React from 'react'
import Subscribe from '@/components/Subscribe'
import Link from 'next/link'
import { Heart } from 'lucide-react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="flex flex-col items-center">
        <Subscribe />
        <div className="mt-8 mb-16 text-center">
          <p className="text-lg">
            Donate: <Link href="/donate" className="text-accent hover:underline">geodelabs.eth</Link>{" "}
            <Heart className="inline h-5 w-5 text-red-500" fill="currentColor" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default layout

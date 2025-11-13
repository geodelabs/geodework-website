import React from 'react'
import { generateClipPath } from '@/styles/clipPaths'
import Link from 'next/link'
import { Heart } from "lucide-react"


const HeroDock = () => {
  const clipPathStyle = generateClipPath(['BottomLeft', 'TopRight'])
  const bottomLeftClipPath = generateClipPath('BottomLeft')
  
  return (
    <div className='relative p-1 bg-white font-mono text-xl font-semibold' style={clipPathStyle}>
      <div 
        className='flex bg-primary items-stretch overflow-visible'
        style={clipPathStyle}
      >
        <div className='flex-1 relative' style={bottomLeftClipPath}>
          <button 
            className='w-full h-full px-8 py-3 transition-all relative group'
            style={bottomLeftClipPath}
          >
            <span className='relative z-10 block group-hover:text-primary transition-colors'>
              <Link href="/newsletter">Newsletter</Link>
            </span>
            <div 
              className='absolute inset-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity'
              style={bottomLeftClipPath}
            />
          </button>
          <div 
            className='absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none'
            style={bottomLeftClipPath}
          />
        </div>
        <div className='w-1 bg-white flex-shrink-0' />
        <div className='flex-1 relative isolate'>
          <button className='w-full h-full border-2 border-transparent px-8 py-3 hover:border-primary hover:bg-white hover:text-primary transition-colors'>
            <Link href="https://shop.geode.build/">Merch</Link>
          </button>
        </div>
        <div className='w-1 bg-white flex-shrink-0' />
        <div className='flex-1 relative bg-accent' style={generateClipPath('TopRight')}>
          <button 
            className='w-full h-full px-8 py-3 transition-all relative group'
            style={generateClipPath('TopRight')}
          >
            <span className='relative z-10 block text-primary group-hover:text-primary transition-colors'>
              <Link href="/donate" className='inline-flex mt-1 justify-center items-center'><Heart className="mr-2 h-5 w-5 group-hover:fill-primary transition-all" />Donate</Link>
            </span>
            <div 
              className='absolute inset-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity'
              style={generateClipPath('TopRight')}
            />
          </button>
          <div 
            className='absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors pointer-events-none'
            style={generateClipPath('TopRight')}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroDock

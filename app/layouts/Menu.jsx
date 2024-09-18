"use client"
import React from 'react'
import { sidebarLinks } from '@app/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Menu = () => {
const path=usePathname()
  return (
    <div>
      <div className='flex flex-col gap-2'>
        {sidebarLinks.map((link)=>{
            const isActive=path===link.route
            return(
                <Link key={link.label} href={link.route} className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${isActive&&"bg-purple-1"}`}>
                {link.icon}<p className='text-light-1'>{link.label}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Menu

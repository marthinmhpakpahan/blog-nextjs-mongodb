import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <Image src={assets.logo_light} alt='' width={120} />
        <p className='text-sm text-white'>All right reserved. Copyright @mmhp.tech</p>
        <div className='flex'>
            <Image className="mx-1" src={assets.facebook_icon} alt='' width={40} />
            <Image className="mx-1" src={assets.twitter_icon} alt='' width={40} />
            <Image className="mx-1" src={assets.googleplus_icon} alt='' width={40} />
        </div>
    </div>
  )
}

export default Footer
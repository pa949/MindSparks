import Image from 'next/image'
import React from 'react'
import { Button } from "../../components/ui/button"

 function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
        <Image src={'./logo-no-background.svg'} width={150} height={100}/>
        <Button>Get Started</Button>
    </div>
  )
}
export default Header
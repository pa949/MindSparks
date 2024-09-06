import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../../components/ui/button"

 function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
        <Image src={'./logo-no-background.svg'} width={150} height={100}/>
        
        <Link href="C:\Users\manav\OneDrive\Desktop\HACKATHON\genai\app\(auth)">
          
            <Button>Get Started</Button>
        
        </Link>
    </div>
  )
}
export default Header
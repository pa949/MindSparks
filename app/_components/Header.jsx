'use client'
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Button } from "../../components/ui/button";

 function Header() {
  const router = useRouter();
const handleRedirect = () => {
    // Redirect to the desired location
    router.push('/dashboard');
  };

  return (
    <div className='flex justify-between p-5 shadow-sm'>
        <Image src={'./logo-no-background.svg'} width={150} height={100}/>
        
        
          
            <Button onClick={handleRedirect}>Get Started</Button>
        
        
    </div>
  )
}
export default Header
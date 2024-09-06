"use client"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/ui/button';

function AddCourse() {
  const Router = useRouter();
  const handleRedirect = () =>{
    Router.push('/create-course');
  };
  const {user}=useUser();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-3xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create a new course with MindSparks</p>
        </div>
        
        <Button onClick={handleRedirect}>Create New Course</Button>
        
    </div>
  )
}

export default AddCourse
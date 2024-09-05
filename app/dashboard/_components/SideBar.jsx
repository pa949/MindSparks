"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D, } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
function SideBar(){
    const menu = [
        {
        id:1,
        name : "Home",
        icon : <HiOutlineHome/>,
        path : '/dashboard'
    },
     {
        id:1,
        name : "Explore",
        icon : <HiOutlineSquare3Stack3D/>,
        path : '/dashboard/explore'
    },
     {
        id:1,
        name : "Upgrade",
        icon : <HiOutlineShieldCheck/>,
        path : '/dashboard/upgrade'
    },
     {
        id:1,
        name : "Analytics",
        icon : <TbDeviceDesktopAnalytics />,
        path : '/dashboard/analytics'
    },
     {
        id:1,
        name : "Logout",
        icon : <HiOutlinePower/>,
        path : '/dashboard/logout'
    },
    
]
const path = usePathname();
    return (
        <div className='fixed h-full md:w-64 p-5 shadow-md'>
            <Image src={'/logo-no-background.svg'} width={160} height={100} />
            <hr className="my-5"/>
          <ul>
            {menu.map((item, index)=>(
                
                <div className={"flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover: text-black rounded-lg"${item.path==path}}>
                    <div className="text-2xl">{item.icon}</div>
                    <h2>{item.name}</h2>
                </div>
            ))}
          </ul>
       </div>
    )
}

export default SideBar
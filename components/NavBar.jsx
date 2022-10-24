import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function NavBar(props) {

    const [isCollapsed, setIsCollapsed] = useState(true)

    const onMenuClick = () => {
        isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)    
    }

    return(
        <div className="w-full " id="nav">

            {/* Home Logo nav to Home */}
            <ul className="flex justify-between my-auto mx-2 min-h-10v p-3 border-b-2 border-main-orange">
                <li className='my-auto mx-5 relative w-14 md:w-24'>
                    <Link href={`/`} className='m-auto relative block'> 
                        <Image
                            src={'/images/siteLogo.png'}
                            alt={'Site Logo Home Link.'}
                            width={40}
                            height={40}
                            layout='responsive'
                        />
                    </Link>
                </li>

                {/* Mobile Nav */}
                
                    {/* Burger menu */}
                <li className=' my-auto mx-5 z-50 cursor-pointer' onClick={onMenuClick} >
                    <div className={`${isCollapsed ? 'rotate-0' : 'rotate-45 top-1 md:top-2 relative'} transition-all rounded w-6 md:w-12 p-0.5 md:p-1 my-1 md:my-3 bg-font-grey`}></div>
                    <div className={`${isCollapsed ? 'block' : 'hidden'} rounded w-3 md:w-6 p-0.5 md:p-1 ml-3 md:ml-6 bg-dark-grey`}></div>
                    <div className={`${isCollapsed ? 'rotate-0' : '-rotate-45 bottom-1 md:bottom-3 relative'} transition-all rounded w-6 md:w-12 p-0.5 md:p-1 my-1 md:my-3 bg-font-grey`}></div>
                </li>
            </ul>

            <div className={`${isCollapsed ? 'opacity-0 h-1' : 'opacity-90 w-1/2 h-100v'}  bg-main-orange fixed right-0 top-0 z-20 transition-all text-2xl`}>
                <nav  className={`${isCollapsed ? 'opacity-0 pointer-events-none flex h-1 flex-row' : 'flex-col h-80v w-1/2'} flex  my-auto mx-5 justify-around`}>
                    <Link  href='/'>
                        <a onClick={onMenuClick}>Home</a>
                    </Link>
                    <Link href='/'>
                        <a onClick={onMenuClick}>Bike</a>
                    </Link>
                    <Link href='/'>
                        <a onClick={onMenuClick}>Climb</a>
                    </Link>
                    <Link href='/'>
                        <a onClick={onMenuClick}>Hike</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}



export default NavBar
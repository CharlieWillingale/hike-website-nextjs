import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import styles from '../styles/NavBar.module.css'
import {getImageRoute} from '../lib/image_utils'

const imageRoute = getImageRoute()

function NavBar(props) {

    const [isCollapsed, setIsCollapsed] = useState(true)

    const onMenuClick = () => {
        isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)    
    }

    return(
        <div className={`w-full`} id="nav">

            {/* Home Logo nav to Home */}
            <ul className="flex justify-between my-auto mx-2 min-h-10v p-3 border-b-2 border-main-orange">
                <li className='my-auto mx-5 relative w-14 md:w-24'>
                    <Link href={`/`} className='m-auto relative block'> 
                        <Image
                            src={`${imageRoute}/images/siteLogo.png`}
                            alt={'Site Logo Home Link.'}
                            width={40}
                            height={40}
                            layout='responsive'
                        />
                    </Link>
                </li>

                {/* Mobile Nav */}
                
                    {/* Burger menu */}
                <li className='my-auto mx-5 z-50 cursor-pointer lg:hidden' onClick={onMenuClick} >
                    <div className={`${isCollapsed ? 'rotate-0' : 'rotate-45 top-8 right-9 md:top-10  fixed'} transition-all rounded w-6 md:w-12 p-0.5 md:p-1 my-1 md:my-3 bg-font-grey`}></div>
                    <div className={`${isCollapsed ? 'block' : 'hidden'} rounded w-3 md:w-6 p-0.5 md:p-1 ml-3 md:ml-6 bg-dark-grey`}></div>
                    <div className={`${isCollapsed ? 'rotate-0' : '-rotate-45 top-8 right-9 md:top-10 fixed'} transition-all rounded w-6 md:w-12  p-0.5 md:p-1 my-1 md:my-3 bg-font-grey`}></div>
                </li>
            

            <div className={`${isCollapsed ? styles.navBarWrapperCollapsedTrue : styles.navBarWrapperCollapsedFalse}  bg-main-orange lg:bg-[#fff] z-20 transition-all text-2xl`}>
                <nav  className={`${isCollapsed ? styles.navBarCollapsedTrue : styles.navBarCollapsedFalse } md:text-4xl`}>
                    <Link  href='/'>
                        <a onClick={onMenuClick}>Home</a>
                    </Link>
                    <Link href='/bike'>
                        <a onClick={onMenuClick}>Bike</a>
                    </Link>
                    <Link href='/climb'>
                        <a onClick={onMenuClick}>Climb</a>
                    </Link>
                    <Link href='/hike'>
                        <a onClick={onMenuClick}>Hike</a>
                    </Link>
                </nav>
            </div>
            </ul>
        </div>
    )
}



export default NavBar
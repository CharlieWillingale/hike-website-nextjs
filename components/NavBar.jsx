import Link from "next/link"
import Image from "next/image"

function NavBar(props) {
    return(
        <nav className="w-full ">

            {/* Home Logo nav to Home */}
            <ul className="flex my-auto mx-2 h-10v border-b-2 border-main-orange">
                <li className='m-auto relative'>
                    <Link href={`/`} className='m-auto relative'> 
                        <Image
                            src={'/images/siteLogo.png'}
                            alt={'Site Logo Home Link.'}
                            width={25}
                            height={25}
                            
                        />
                    </Link>
                </li>

                {/* Mobile Nav */}
                
                    {/* Burger menu */}
            
            </ul>
        </nav>
    )
}



export default NavBar
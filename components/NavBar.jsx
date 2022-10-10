import Link from "next/link"
import Image from "next/image"

function NavBar(props) {
    return(
        <nav className="w-full ">

            {/* Home Logo nav to Home */}
            <ul className="flex justify-between my-auto mx-2 h-10v border-b-2 border-main-orange">
                <li className='my-auto mx-5 relative'>
                    <Link href={`/`} className='m-auto relative'> 
                        <Image
                            src={'/images/siteLogo.png'}
                            alt={'Site Logo Home Link.'}
                            width={40}
                            height={40}
                            
                        />
                    </Link>
                </li>

                {/* Mobile Nav */}
                
                    {/* Burger menu */}
                <li className="my-auto mx-5">
                    <div className="rounded w-6 p-0.5 my-1 bg-font-grey"></div>
                    <div className="rounded w-3 p-0.5 ml-3 bg-dark-grey"></div>
                    <div className="rounded w-6 p-0.5 my-1 bg-font-grey"></div>
                </li>
            </ul>
        </nav>
    )
}



export default NavBar
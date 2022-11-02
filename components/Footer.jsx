import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram}  from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
    return(
        <footer className='w-full min-h-10'>
            <ul className='min-h-20v p-10 mx-2 mt-5 text-font-grey border-main-orange border-t-2 flex m-auto justify-center md:flex-row'>
                <li>
                    <a href='https://www.Instagram.com/cgwphoto'>
                        <FontAwesomeIcon className='h-[2.5rem]'  icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer


import Image from 'next/image'

function Footer(props) {
    return(
        <footer className='w-full min-h-10'>
            <ul className='min-h-30v p-10 mx-2 mt-5 text-font-grey border-main-orange border-t-2 flex flex-col justify-between md:flex-row'>
                <li><a href='https://www.Instagram.com/cgwphoto'>Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer
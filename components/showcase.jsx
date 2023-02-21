import Image from 'next/image'
import {getImageRoute} from '../lib/image_utils'

const imageRoute = getImageRoute()

function Showcase(props) {
    return(
        <section className='flex justify-center min-h-30v sm:m-6 my-5'>
           <div className='flex w-2/3 justify-center'>
                <div className='my-auto p-1 block w-1/2'>
                    <Image 
                        src={`${imageRoute}${props.showcaseImage}`}
                        alt={props.showcaseAltTxt}
                        width={100}
                        height={100}
                        layout='responsive'

                        />
                </div>
                <div className='my-auto p-1.5 '>
                    {props.title.split(' ').map(word =>
                        <h1 key={word} className='p-0 md:text-4xl'>{word}</h1>
                        )}
                </div>
            </div> 
        </section>
    )
}

Showcase.defaultProps = {
    title: "Oops! Title Missing!",
    showcaseImage:'/images/siteLogo.png',
    showcaseAltTxt:'Website logo.'

}

export default Showcase
import Image from 'next/image'

function Showcase(props) {
    return(
        <section className='flex justify-center min-h-30v sm:m-6 my-5'>
            <div className='my-auto p-1 block w-1/3'>
                <Image 
                    src={props.showcaseImage}
                    alt={props.showcaseAltTxt}
                    width={100}
                    height={100}
                    layout='responsive'

                    />
            </div>
            <div className='my-auto p-1.5 w-1/3'>
                {props.title.split(' ').map(word =>
                    <h1 key={word} className='p-0 md:text-4xl'>{word}</h1>
                    )}
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
import Image from 'next/image'

function Showcase(props) {
    return(
        <section className='flex justify-center h-30v'>
            <div className='my-auto p-1'>
                <Image 
                    src={'/images/siteLogo.png'}
                    alt='Website logo.'
                    width={100}
                    height={100}
                    />
            </div>
            <div className='my-auto p-1.5'>
                {props.title.split('\n').map(word =>
                    <h1 className='p-0'>{word}</h1>
                    )}
            </div>
        </section>
    )
}

Showcase.defaultProps = {
    title: "Oops! Title Missing!"
}

export default Showcase
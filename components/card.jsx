import Image from 'next/image'

function Card(props) {
    return(
        <section className='h-60v w-10/12 border-main-orange border-solid border-2 rounded bg-slate-700 mx-auto'>
               <article className='mx-auto my-[5.5%] min-h-[93%] w-[90%]'>

                    <Image
                        src='/images/siteLogo.png'
                        alt='whwhcuwhb'
                        height={100}
                        width={100}
                        className=''
                    />

                    <p className='text-[10px]'>{props.cardSampleText}</p>

                    <ul className='flex flex-col border-y-2 border-main-orange'>
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Distance</p>
                            <p>{props.cardDistance}</p>
                        </li>
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Elecation Gain</p>
                            <p>{props.cardDistance}</p>
                        </li>
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Technical Difficulty</p>
                            <p>{props.cardDistance}</p>
                        </li>
                    </ul>


                </article>
        </section>
    )
}

Card.defaultProps = {


}

export default Card
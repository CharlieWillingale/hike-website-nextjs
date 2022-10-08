import Image from 'next/image'

function Card(props) {
    return(
        <section className='h-60v w-10/12 border-main-orange border-solid border-2 rounded bg-slate-700 mx-auto bg-dark-grey'>
               <article className='mx-auto my-[5.5%] min-h-[93%] w-[90%] p-3 flex flex-col justify-between bg-light-grey'>

                    <h3>{props.cardTitle}</h3>
                    <Image
                        src={props.cardImage}
                        alt={props.cardImageAlt}
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

                    <div></div>

                </article>
        </section>
    )
}

Card.defaultProps = {
    cardTitle: 'No Tilte :(',
    cardImage: '/images/siteLogo.png'

}

export default Card
import Image from 'next/image'
import Link from 'next/link'

function Card(props) {

    const firstWordPos = props.cardSampleText.split(' ')[0].length

    return(
        <section className='text-font-grey w-10/12 md:min-w-[250px] border-main-orange border-solid border-2 rounded bg-slate-700 mx-auto bg-dark-grey'>
               <article className='mx-auto my-[5.5%] min-h-[93%] w-[90%] p-3 flex flex-col justify-between bg-light-grey'>

                    <div>
                        <Link href={`/posts/${props.cardSlug}`} className='cursor-pointer hover:text-main-orange focus:text-main-orange'>
                            <h3 className='strong text-xl cursor-pointer hover:text-main-orange focus:text-main-orange'>{props.cardTitle}</h3>
                        </Link>

                        <Image
                            src={props.cardImage}
                            alt={props.cardImageAlt}
                            layout='responsive'
                            height={75}
                            width={100}
                            className=''
                        />
                    </div>

                    {/* Card Sample Text*/}
                    <p className='text-[12px] py-2'> <span className='text-main-orange font-bold'>{props.cardSampleText.slice(0,firstWordPos)}</span>{props.cardSampleText.slice(firstWordPos)}</p>

                    <ul className='flex flex-col border-y-2 border-main-orange mb-4 py-3'>
                        
                        {/* Card Distance Fields */}
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Distance</p>
                            <p>{props.cardDistance}km</p>
                        </li>

                        {/* Card Elevation Fields */}
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Elevation Gain</p>
                            <p>{props.cardElevation}m</p>
                        </li>

                        {/* Card Difficulty Fields */}
                        <li className='flex justify-between m-auto w-5/6'>
                            <p>Technical Difficulty</p>
                            <p>{props.cardDifficulty}/5</p>
                        </li>
                    </ul>

                    <Link href={`/posts/${props.cardSlug}`} className='cursor-pointer'>
                        <button className="bg-transparent hover:bg-main-orange text-main-orange font-semibold hover:text-light-grey py-2 px-4 border border-main-orange hover:border-transparent rounded">
                            Read More!
                        </button>
                    </Link>
                </article>
        </section>
    )
}

Card.defaultProps = {
    cardTitle: 'No Tilte :(',
    cardImage: '/images/siteLogo.png',
    cardElevation: 'No elevation'

}

export default Card
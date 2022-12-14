// import Image from 'next/image'
// import Link from 'next/link'

// function Card(props) {

//     return(
//         <section className='text-font-grey h-60v w-10/12 border-main-orange border-solid border-2 rounded bg-slate-700 mx-auto bg-dark-grey'>
//                <article className='mx-auto my-[5.5%] min-h-[93%] w-[90%] p-3 flex flex-col justify-between bg-light-grey'>

//                     <div>
//                         <Link href={`/posts/${props.cardSlug}`} className='cursor-pointer hover:text-main-orange focus:text-main-orange'>
//                             <h3 className='strong text-xl cursor-pointer hover:text-main-orange focus:text-main-orange'>{props.cardTitle}</h3>
//                         </Link>

//                         <Image
//                             src={props.cardImage}
//                             alt={props.cardImageAlt}
//                             height={200}
//                             width={350}
//                             className=''
//                         />
//                     </div>

//                     {/* Card Sample Text*/}
//                     <p className='text-[10px]'>{props.cardSampleText}</p>

//                     <ul className='flex flex-col border-y-2 border-main-orange mb-4 py-3'>
                        
//                         {/* Card Distance Fields */}
//                         <li className='flex justify-between m-auto w-5/6'>
//                             <p>Distance</p>
//                             <p>{props.cardDistance}km</p>
//                         </li>

//                         {/* Card Elevation Fields */}
//                         <li className='flex justify-between m-auto w-5/6'>
//                             <p>Elevation Gain</p>
//                             <p>{props.cardElevation}m</p>
//                         </li>

//                         {/* Card Difficulty Fields */}
//                         <li className='flex justify-between m-auto w-5/6'>
//                             <p>Technical Difficulty</p>
//                             <p>{props.cardDifficulty}/5</p>
//                         </li>
//                     </ul>

//                     <Link href={`/posts/${props.cardSlug}`} className='cursor-pointer hover:text-main-orange focus:text-main-orange'>
//                         <button class="bg-transparent hover:bg-main-orange text-main-orange font-semibold hover:text-white py-2 px-4 border border-main-orange hover:border-transparent rounded">
//                             Read More!
//                         </button>
//                     </Link>
//                 </article>
//         </section>
//     )
// }

// Card.defaultProps = {
//     cardTitle: 'No Tilte :(',
//     cardImage: '/images/siteLogo.png',
//     cardElevation: 'No elevation'

// }

// export default Card
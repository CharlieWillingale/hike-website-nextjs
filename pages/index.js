import Head from 'next/head'
import Image from 'next/image'
import Showcase from '../components/showcase'
import Card from '../components/card'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts';


export default function Home({allPostsData}) {
  
  return (
    <>
      <Head>
        <title>Hike Site | Home</title>
      </Head>
      <Showcase title={'Hike. Climb. Bike.'} />

      <ul>
          <h2 className='px-5 text-main-orange'>Latest posts</h2>
          {allPostsData.map(({ id, title,routeImageUrl,routeImageAlt,routeSampleText,routeDistance,routeElevation,routeDifficulty}) => (
            <li key={id} className='my-4'>
                <Card 
                  cardSlug={id}
                  cardTitle={title}
                  cardImage={routeImageUrl}
                  cardImageAlt={routeImageAlt}
                  cardSampleText={routeSampleText}
                  cardDistance={routeDistance}
                  cardElevation={routeElevation}
                  cardDifficulty={routeDifficulty}
                />
            </li>
          ))}
        </ul>


    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
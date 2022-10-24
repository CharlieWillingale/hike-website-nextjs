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

      <main>
          <h2 className='px-5 text-main-orange'>Latest posts</h2>
          <section className='flex flex-col lg:flex-row'>
            {allPostsData.slice(0,3).map(({ id, title,routeImageUrl,routeImageAlt,routeSampleText,routeDistance,routeElevation,routeDifficulty}) => (
              <article key={id} className='my-4'>
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
              </article>
            ))}
          </section>
        </main>


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
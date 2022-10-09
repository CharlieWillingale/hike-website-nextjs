import Head from 'next/head'
import Image from 'next/image'
import Showcase from '../components/showcase'

import { getSortedPostsData } from '../lib/posts';

export default function Home({allPostsData}) {
  return (
    <>
      <Head>
        <title>Hike Site | Home</title>
      </Head>
      <Showcase title={'Hike.\nClimb.\nBike.'} />

      <ul>
          {allPostsData.map(() => (
            <li key={allPostsData.id}>
              {allPostsData.title}
              <br />
              {allPostsData.date}
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
import Head from 'next/head'
import Image from 'next/image'
import Showcase from '../components/showcase'
import Card from '../components/card'

import { getSortedPostsData } from '../lib/posts';

export default function Home({allPostsData}) {
  return (
    <>
      <Head>
        <title>Hike Site | Home</title>
      </Head>
      <Showcase title={'Hike.\nClimb.\nBike.'} />

      <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
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
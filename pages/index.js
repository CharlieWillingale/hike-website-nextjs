import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Showcase from '../components/showcase'
import Card from '../components/card'

export default function Home() {
  return (
    <>
      <Showcase title={'Hike.\nClimb.\nBike.'} />
      <Card cardSampleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat inventore dolorum odit nobis culpa voluptatem corrupti consequatur architecto mollitia optio ut at accusamus labore incidunt, placeat neque minima. Aliquam?' cardDistance='100'/>
    </>
  )
}

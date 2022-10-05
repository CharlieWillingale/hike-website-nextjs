import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Showcase from '../components/showcase'

export default function Home() {
  return (
    <>
      <Showcase title={'Hike.\nClimb.\nBike.'} />
    </>
  )
}

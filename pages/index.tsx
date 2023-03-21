import CallToAction from '@/components/CallToAction'
import FeatureSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MAT - Market Analytic Trading</title>
        <meta name="description" content="Indicador para operações de day-trade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </>
  )
}

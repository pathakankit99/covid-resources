import Head from 'next/head'
import Homepage from "../src/components/Homepage"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Homepage/>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Homepage from "../src/components/Homepage"
export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Covid Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Homepage/>
      </main>

      
      <h3 className="bg-blue-700 text-white px-2 py-3 w-full ">Note: Share the info on the website and contribute to the site. Contact Ankit Pathak through email: ankitpathak143192@gmail.com or <a href="tel:7031785903">Click here to call</a> <a target="_blank" href="https://instagram.com/pathakankit99">..</a> for website related problem</h3>
    </div>
  )
}

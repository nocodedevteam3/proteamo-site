// Update the import to ensure it's correctly importing the Layout component
import Layout from "@/components/layout/layout"
import type { AppProps } from "next/app"
import Head from "next/head"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

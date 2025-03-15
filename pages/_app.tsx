// Update the import to ensure it's correctly importing the Layout component
import Layout from "@/components/layout/layout"
import type { AppProps } from "next/app"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


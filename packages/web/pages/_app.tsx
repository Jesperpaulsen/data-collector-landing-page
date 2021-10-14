import '../styles/index.css'
import { NextPage,  } from 'next'
import type { AppProps } from 'next/app'

const DataCollectorPage: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default DataCollectorPage

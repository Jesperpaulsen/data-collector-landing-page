import '../styles/index.css'
import { NextPage,  } from 'next'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'

const DataCollectorPage: NextPage<AppProps> = ({ Component, pageProps }) => {
  pageProps.className = "flex-grow"
  return <div className="h-screen flex flex-col">
      <Menu />
      <Component {...pageProps} />
    </div>
}

export default DataCollectorPage

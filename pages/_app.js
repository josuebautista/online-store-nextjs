import '@/styles/globals.css';
import { Layout } from '@/components';
import { AppProvider } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

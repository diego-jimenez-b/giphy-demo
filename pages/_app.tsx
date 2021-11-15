import '../styles/styles.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeContextProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;

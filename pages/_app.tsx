import '../styles/styles.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeContextProvider } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '../components/UI/LoadingSpinner';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
    router.events.on('routeChangeError', () => {
      setLoading(false);
    });

    return () => {
      router.events.off('routeChangeStart', () => {
        setLoading(true);
      });
      router.events.off('routeChangeComplete', () => {
        setLoading(false);
      });
      router.events.off('routeChangeError', () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <ThemeContextProvider>
      {loading && <LoadingSpinner />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;

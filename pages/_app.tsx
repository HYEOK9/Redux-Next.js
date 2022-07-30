import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { wrapper } from '../store/redux';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <section style={{ marginTop: '10vh' }}>
          <Component {...pageProps} />
        </section>
      </RecoilRoot>
    </>
  );
}

export default wrapper.withRedux(MyApp);

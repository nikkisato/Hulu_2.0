import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.scss';
import { GET_HOME_PAGE } from '../graphql/queries';
import { client } from '../libs/apollo-client';
import { Page_Homepage, PostTypeSeo } from '../generated/graphql';

const inter = Inter({ subsets: ['latin'] });

type HomePageProps = {
  home: Page_Homepage;
  seo: PostTypeSeo;
};

export default function Home({ home, seo }: HomePageProps) {
  const { hero } = home;

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name='description' content={seo?.metaDesc} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <section
          style={{
            padding: '1rem',
            backgroundImage: `url(${hero?.image?.sourceUrl})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>{hero?.headline}</h1>
          <h3>{hero?.subheadline}</h3>
          <p>{hero?.description}</p>
          <button>{hero?.button}</button>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_HOME_PAGE,
  });

  const home = response.data.page.homePage;
  const seo = response.data.page.seo;

  return {
    props: {
      home,
      seo,
    },
  };
}

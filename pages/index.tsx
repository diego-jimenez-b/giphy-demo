import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();

  const navigateGalleryHandler = () => {
    router.push('/gifs-gallery/1');
  };

  return (
    <Fragment>
      <Head>
        <title>Giphy demo</title>
        <meta
          name='description'
          content='GIPHY is the platform that animates your world. Find the GIFs, Clips, and Stickers that make your conversations more positive, more expressive, and more you.'
        />
        <meta
          name='keywords'
          content='GIF search engine,GIF search engine,animated GIFs,best GIFs,GIF,GIFs,funny GIFs,movie GIFs,tv GIFs,reaction GIFs,cat GIFs,girl GIFs,happy GIFs,breaking bad GIFs,anime GIFs,sad GIFs,fail GIFs,star wars GIFs,memes,yes GIFs,no GIFs,create GIFs,GIF maker'
        />
      </Head>

      <div className='home'>
        <h1>(Giphy.demo)</h1>

        <p>
          GIPHY is your top source for the best &amp; newest GIFs &amp; Animated
          Stickers online. Find everything from funny GIFs, reaction GIFs,
          unique GIFs and more.
        </p>

        <div className='home__gallery'>
          <img
            crossOrigin='anonymous'
            alt='sample gif 1'
            src={
              'https://media3.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif?cid=ecf05e47jinmou594vkh4d4oiz0sdglvmygydsim4vp4rhmk&rid=giphy.gif&ct=g'
            }
          />
          <img
            crossOrigin='anonymous'
            alt='sample gif 2'
            src={
              'https://media2.giphy.com/media/l3E6IlIx5f9nVjd84/giphy.gif?cid=ecf05e47qg1nniqwolabs48b34ka9tjscck8iwyk911413nz&rid=giphy.gif&ct=g'
            }
          />
        </div>

        <button onClick={navigateGalleryHandler}>Explore trending gifs</button>
      </div>
    </Fragment>
  );
};

export default Home;

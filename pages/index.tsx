import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const navigateGalleryHandler = () => {
    router.push('/gifs-gallery/1');
  };

  return (
    <div className='home'>
      <h1>(Giphy.demo)</h1>

      <p>
        GIPHY is your top source for the best &amp; newest GIFs &amp; Animated
        Stickers online. Find everything from funny GIFs, reaction GIFs, unique
        GIFs and more.
      </p>

      <div className='home__gallery'>
        <img
          crossOrigin='anonymous'
          alt=''
          src={
            'https://media3.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif?cid=ecf05e47jinmou594vkh4d4oiz0sdglvmygydsim4vp4rhmk&rid=giphy.gif&ct=g'
          }
        />
        <img
          crossOrigin='anonymous'
          alt=''
          src={
            'https://media2.giphy.com/media/l3E6IlIx5f9nVjd84/giphy.gif?cid=ecf05e47qg1nniqwolabs48b34ka9tjscck8iwyk911413nz&rid=giphy.gif&ct=g'
          }
        />
      </div>

      <button onClick={navigateGalleryHandler}>Explore trending gifs</button>
    </div>
  );
};

export default Home;

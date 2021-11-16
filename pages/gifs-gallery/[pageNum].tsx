import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { getGalleryUrl } from '../../config/config';
import { GifType } from '../../models/models';
import Head from 'next/head';

import GifsList from '../../components/gifs-list/GifsList';
import Pagination from '../../components/gifs-list/Pagination';
import { Fragment } from 'react';

interface GifsGalleryProps {
  gifs: GifType[];
  currentPage: number;
}

const GifsGalleryPage = ({
  gifs,
  currentPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Gifs gallery page {currentPage}</title>
        <meta
          name='description'
          content='GIPHY is your top source for the best &amp; newest GIFs &amp; Animated Stickers online. Find everything from funny GIFs, reaction GIFs, unique GIFs and more.'
        />
        <meta name='author' content='Giphy-demo' />
        <meta
          name='keywords'
          content='GIF search engine,GIF search engine,animated GIFs,best GIFs,GIF,GIFs,funny GIFs,movie GIFs,tv GIFs,reaction GIFs,cat GIFs,girl GIFs,happy GIFs,breaking bad GIFs,anime GIFs,sad GIFs,fail GIFs,star wars GIFs,memes,yes GIFs,no GIFs,create GIFs,GIF maker'
        />
        <link rel='canonical' href='https://giphy-demo.vercel.app/' />
      </Head>

      <div className='gallery'>
        <h1>Gallery - page {router.query.pageNum}</h1>

        <GifsList gifsList={gifs} />
        <Pagination currentPage={currentPage} />
      </div>
    </Fragment>
  );
};

export default GifsGalleryPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];
  for (let i = 1; i <= 10; i++) {
    paths.push({ params: { pageNum: i.toString() } });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps<GifsGalleryProps> = async (
  context
) => {
  const page = context.params!.pageNum!;
  const res = await fetch(getGalleryUrl(+page));
  const data = await res.json();

  return {
    props: {
      gifs: data.data.map((gif: any) => ({
        id: gif.id,
        slug: gif.slug,
        imageUrl: gif.images.fixed_height.url,
        username: gif.username,
        userImage: gif.user?.avatar_url ? gif.user.avatar_url : null,
      })),
      currentPage: +page,
    },
    revalidate: 20,
  };
};

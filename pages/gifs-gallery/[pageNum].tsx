import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import GifsList from '../../components/gifs-list/GifsList';
import Pagination from '../../components/gifs-list/Pagination';
import { getGalleryUrl } from '../../config/config';
import { GifType } from '../../models/models';

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
    <div className='gallery'>
      <h1>Gallery - page {router.query.pageNum}</h1>

      <GifsList gifsList={gifs} />
      <Pagination currentPage={currentPage} />
    </div>
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

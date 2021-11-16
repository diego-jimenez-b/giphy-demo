import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import GifCommentsSection from '../../components/gif-details/GifCommentsSection';
import GifDetails from '../../components/gif-details/GifDetails';
import { getGifDetailsUrl } from '../../config/config';
import { GifDetailsType } from '../../models/models';

const GifDetailsPage = (props: GifDetailsType) => {
  return (
    <Fragment>
      <div className='gif-details-container'>
        <GifDetails
          id={props.id}
          slug={props.slug}
          imageUrl={props.imageUrl}
          username={props.username}
          userImage={props.userImage}
          giphyUrl={props.giphyUrl}
          rating={props.rating}
          title={props.title}
          importDate={props.importDate}
          gotTrendingDate={props.gotTrendingDate}
          isVerified={props.isVerified}
          profileUrl={props.profileUrl}
        />

        <GifCommentsSection />
      </div>
    </Fragment>
  );
};

export default GifDetailsPage;

export const getServerSideProps: GetServerSideProps<GifDetailsType> = async (
  context
) => {
  const gifId = context.query.gifId!;
  const idStartIndex = gifId.lastIndexOf('-');
  const id = gifId.slice(idStartIndex + 1);

  const res = await fetch(getGifDetailsUrl(id.toString()));
  const resData = await res.json();
  const { data: gif } = resData;

  return {
    props: {
      id: gif.id,
      slug: gif.slug,
      imageUrl: gif.images.original.url,
      username: gif.username,
      userImage: gif.user?.avatar_url ? gif.user.avatar_url : null,
      giphyUrl: gif.url,
      rating: gif.rating,
      title: gif.title,
      importDate: gif.import_datetime,
      gotTrendingDate: gif.trending_datetime,
      isVerified: gif.user?.is_verified ? gif.user.is_verified : false,
      profileUrl: gif.user?.profile_url ? gif.user.profile_url : null,
    },
  };
};

import { GifDetailsType } from '../../models/models';

const GifDetails = ({
  imageUrl,
  username,
  userImage,
  giphyUrl,
  rating,
  title,
  importDate,
  gotTrendingDate,
  isVerified,
  profileUrl,
}: GifDetailsType) => {
  return (
    <div className='gif-details'>
      <h1>{title}</h1>
      <span>Rating: {rating}</span>
      <a href={giphyUrl} target='_blank' rel='noreferrer' >
        <img src={imageUrl} />
      </a>

      <div className='gif-details__user'>
        <a rel='noreferrer' href={profileUrl || '#'} target={profileUrl ? '_blank' : '_self'}>
          <img src={userImage || '/icons/user.png'} />
        </a>
        <span>
          {username || 'anonymous'}
          {isVerified && (
            <img
              className='gif-details__user--checked'
              src='/icons/checked.png'
            />
          )}
        </span>
      </div>

      <div className='gif-details__dates'>
        <span>uploaded: {importDate}</span>
        <span>got trending on: {gotTrendingDate}</span>
      </div>
    </div>
  );
};

export default GifDetails;

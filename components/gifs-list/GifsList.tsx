import Link from 'next/link';
import { GifType } from '../../models/models';

const GifsList = ({ gifsList }: { gifsList: GifType[] }) => {
  return (
    <ul className='gallery__list'>
      {gifsList.map((gif) => (
        <li key={gif.id}>
          <Link href={`/details/${gif.slug}`}>
            <a>
              <img src={gif.imageUrl} alt={gif.title} crossOrigin='anonymous' />
            </a>
          </Link>

          <span className='gallery__list__user'>
            <img
              src={gif.userImage ? gif.userImage : '/icons/user.png'}
              alt={`${gif.username || 'anonymous'}-profile-picture`}
            />
            {gif.username ? gif.username : 'anonymous'}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GifsList;

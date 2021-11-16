import { useRouter } from 'next/router';
import { GifType } from '../../models/models';

const GifsList = ({ gifsList }: { gifsList: GifType[] }) => {
  const router = useRouter();

  const showDetailsHandler = (id: string) => {
    router.push(`/details/${id}`);
  };

  return (
    <ul className='gallery__list'>
      {gifsList.map((gif) => (
        <li key={gif.id} onClick={showDetailsHandler.bind(null, gif.slug)}>
          <img src={gif.imageUrl} alt='' crossOrigin='anonymous' />

          <span className='gallery__list__user'>
            <img src={gif.userImage ? gif.userImage : '/icons/user.png'} />
            {gif.username ? gif.username : 'anonymous'}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GifsList;

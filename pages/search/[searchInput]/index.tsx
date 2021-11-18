import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import GifsList from '../../../components/gifs-list/GifsList';
import SearchForm from '../../../components/search/SearchForm';
import { getSearchUrl } from '../../../config/config';
import { GifType } from '../../../models/models';
import Head from 'next/head';

interface userSearchProps {
  gifs: GifType[];
  searchInput: string;
}

const userSearch = ({ gifs, searchInput }: userSearchProps) => {
  return (
    <Fragment>
      <Head>
        <title>{searchInput} - Giphy.demo search</title>
        <meta
          name='description'
          content='Find GIFs with the latest and newest hashtags! Search, discover and share your favorite Aa GIFs. The best GIFs are on GIPHY.'
        />
        <meta
          name='keywords'
          content={`${searchInput} GIFs, animated GIFs, GIFs, GIF search, GIF collection`}
        />
      </Head>

      <SearchForm initialInput={searchInput} />
      <h1 className='search-page__title search-page__title--user'>
        {searchInput}
      </h1>

      {gifs.length !== 0 && <GifsList gifsList={gifs} />}
      {gifs.length === 0 && (
        <p className='search-page__message'>
          No gifs found for: &quot;{searchInput}&quot;
        </p>
      )}
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<userSearchProps> = async (
  context
) => {
  const input = context.params!.searchInput!.toString().toLowerCase();
  const res = await fetch(getSearchUrl(input));
  const data = await res.json();

  return {
    props: {
      gifs: data.data.map((gif: any) => ({
        id: gif.id,
        slug: gif.slug,
        title: gif.title,
        imageUrl: gif.images.fixed_height.url,
        username: gif.username,
        userImage: gif.user?.avatar_url ? gif.user.avatar_url : null,
      })),
      searchInput: input,
    },
  };
};

export default userSearch;

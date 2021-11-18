import { Fragment } from 'react';
import Head from 'next/head';
import SearchForm from '../../components/search/SearchForm';

const SearchPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Search - Giphy.demo</title>
        <meta
          name='description'
          content='Find GIFs with the latest and newest hashtags! Search, discover and share your favorite Aa GIFs. The best GIFs are on GIPHY.'
        />
        <meta
          name='keywords'
          content='GIF search engine,GIF search engine,animated GIFs,best GIFs,GIF,GIFs,funny GIFs,movie GIFs,tv GIFs,reaction GIFs,cat GIFs,girl GIFs,happy GIFs,breaking bad GIFs,anime GIFs,sad GIFs,fail GIFs,star wars GIFs,memes,yes GIFs,no GIFs, search GIFs'
        />
      </Head>

      <h1 className='search-page__title'>Search for gifs</h1>
      <SearchForm />
      <p className='search-page__message'>Enter some text to search for gifs</p>
    </Fragment>
  );
};

export default SearchPage;

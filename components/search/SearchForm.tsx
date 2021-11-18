import { useRouter } from 'next/router';
import { FormEventHandler, useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const SearchForm = (props: { initialInput?: string }) => {
  const userInputRef = useRef<HTMLInputElement>(null);
  const { darkMode } = useContext(ThemeContext);
  const router = useRouter();

  const formSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    const userInput = userInputRef.current?.value.trim().toLowerCase() || '';

    if (userInput === '') {
      if (router.pathname === '/search') return;
      router.push('/search');
    } else {
      router.push(`/search/${userInput}`);
    }
  };

  useEffect(() => {
    if (props.initialInput) {
      userInputRef.current!.value = props.initialInput;
    }
  }, []);

  return (
    <form
      onSubmit={formSubmitHandler}
      className={darkMode ? 'search-form search-form--dark' : 'search-form'}
    >
      <span>
        <input
          type='text'
          ref={userInputRef}
          className='search-form__input'
          placeholder='Look for a gif!'
        />
        <input type='image' src='/icons/search.png' alt='search' />
      </span>
    </form>
  );
};

export default SearchForm;

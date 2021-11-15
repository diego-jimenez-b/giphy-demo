import { Fragment, ReactNode, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from '../../context/ThemeContext';
// import mainIcon from '../../assets/images/digital-painting.png';

const Layout = (props: { children: ReactNode }) => {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navigateHomeHandler = () => {
    router.push('/');
  };

  return (
    <Fragment>
      <nav
        className={
          darkMode ? 'navigation-bar navigation-bar--dark' : 'navigation-bar'
        }
      >
        <div className='navigation-bar__logo' onClick={navigateHomeHandler}>
          <img src={'/images/digital-painting.png'} />
          <span>GIPHY.demo</span>
        </div>

        <img
          className={
            darkMode
              ? 'navigation-bar__icon navigation-bar__icon--dark'
              : 'navigation-bar__icon'
          }
          onClick={toggleDarkMode}
          src='/icons/theme-icon.png'
        />

        <ul className='navigation-bar__links'>
          <li>
            <Link href='/gifs-gallery/1'>Trending</Link>
          </li>
          <li>
            <Link href='/search'>Search</Link>
          </li>
        </ul>
      </nav>

      {props.children}
    </Fragment>
  );
};

export default Layout;

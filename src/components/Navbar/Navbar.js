import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react';

function NavBar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    }
    const prevScrollY = useRef(0);
    const [scrollPos, setScrollPos] = useState(0);
    const [atTop, setAtTop] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY != 0) {
          setAtTop(false);
        } else {
          setAtTop(true);
        }
        prevScrollY.current = currentScrollY;
        setScrollPos(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPos]);
  
    return (
      // <div className="text-white text-center sticky">
      <div className="py-10">
        {/* <nav className="flex items-center flex-wrap bg-gray-700 p-3 text-white text-center fixed top-0 inset-x-0"> */}
        <nav className={`flex items-center flex-wrap bg-gray-700 p-3 text-white text-center fixed top-0 inset-x-0${!atTop ? ' shadow-xl' : ''}`} >
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              {/* <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-white h-8 w-8 mr-2'
              >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
              </svg> */}
              <img src="./briefcase.png" className="h-10 mx-2" alt="briefcase"></img>
              <span className='text-3xl text-white font-light tracking-wide ml-2'>
                Portfolio
              </span>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white '>
                  Home
                </a>
              </Link>
              <Link href='/weather'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                  Weather
                </a>
              </Link>
              <Link href='/crypto'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                  Crypto
                </a>
              </Link>
              <Link href='/star-match'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                  Game
                </a>
              </Link>
              <Link href='/spotify'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                  Spotify
                </a>
              </Link>
            </div>
          </div>
        </nav>
        </div>
    );
}

export default NavBar;

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setClass] = useState('closed');
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const openModal = (event) => {
    if (open) {
      document.body.classList.remove('navigation-is-open');
    } else {
      document.body.classList.add('navigation-is-open');
    }

    setOpen((open) => !open);
  };
  return (
    <div className='b'>
      <div id='navigacija' className=' '>
        <Link href='/'>
          <div id='logo'> </div>
        </Link>
        <Link href={asPath} locale={'hr'}>
          <div className='lng text-black'>
            <small>HR</small>
          </div>
        </Link>
     

        <a onClick={openModal} className='cd-nav-trigger p-3'>
          <div className='p-1' id='nav-icon1'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <div
        id='cd-nav'
        className='cd-nav '
        style={{
          height: '100vh',
          width: '100%',
        }}>
        <div className='cd-navigation-wrapper '>
          <div className=''>
            <nav className='cd-primary-nav'>
              <ul className=' m-auto'>
                <h1 className='m-auto text-4xl'>
                  {' '}
                  <img
                    style={{ width: '100px', marginRight: 'auto' }}
                    src='https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/304785562_786446692564946_8864987983678309062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JBSP7_f_NAAAX8sX5_y&_nc_ht=scontent.fzag3-1.fna&oh=00_AfAO2RfyKNwN51Ms4RddDO6hfF0gs9TlwCuc3aE-xOZb_g&oe=63F93FFC'
                  />
                </h1>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/'>
                    Home
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/about'>
                   About
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/menu'>
                   Menu
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/contact'>
                 Contact
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/wine-card'>
                 Vine Card
                  </Link>
                </li>
           
                <li className='m-auto text-sm'>
                  <small>Restoran Dvor</small>
                </li>
                <li className='m-auto text-xs'>
                  <small>+ 385 65655656</small>
                  <br />
                  <small>info@dvor.hr</small>

                  <br />
                  <small>Primošten</small>
                </li>
              </ul>
             
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
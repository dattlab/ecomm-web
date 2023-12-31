import {
  faScrewdriverWrench,
  faUser,
  faCartShopping,
  faRightToBracket,
  faMagnifyingGlass,
  faPeopleGroup,
  faNewspaper,
  faAddressBook,
  faPhone,
  faEnvelope,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export const BASE_URL =
//   process.env.NODE_ENV === 'develeopment' ? 'http://localhost:5000' : '';
// export const BASE_URL = 'https://ecomm-web-production.up.railway.app/'; // If using proxy
export const BASE_URL = ''; // If using proxy
export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';

// Icons, labels
export const brandName = 'Sinulid at Kawit';
export const searchPlaceholder = 'Search...';
export const navPhoneNumber = '+63(12)3456-7890';
export const navEmail = 'sinulidatkawit@gmail.com';
export const adminNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon
      className='mt-1 pe-1'
      icon={faScrewdriverWrench}
    /> Admin{' '}
  </>
);
export const userNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faUser} /> Username{' '}
  </>
);
export const cartNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faCartShopping} /> Cart{' '}
  </>
);
export const loginNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faRightToBracket} /> Login{' '}
  </>
);
export const aboutNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faPeopleGroup} /> About{' '}
  </>
);
export const contactNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faPeopleGroup} /> Contact{' '}
  </>
);
export const blogNavMenuLabel = (
  <>
    {' '}
    <FontAwesomeIcon className='mt-1 pe-1' icon={faNewspaper} /> Blog{' '}
  </>
);
export const searchBtnIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
export const brandLogo = (
  <>
    {' '}
    <img
      src={logo}
      alt={brandName}
      style={{ width: '50px', objectFit: 'cover' }}
    />{' '}
  </>
);
export const extLinkIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
export const fbIcon = (
  <FontAwesomeIcon icon={faFacebookSquare} className='ext-link-icon' />
);
export const twtIcon = (
  <FontAwesomeIcon icon={faTwitterSquare} className='ext-link-icon' />
);
export const instaIcon = (
  <FontAwesomeIcon icon={faInstagramSquare} className='ext-link-icon' />
);
export const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
export const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
export const addressIcon = <FontAwesomeIcon icon={faAddressBook} />;

import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';

const navItemsInfo = [
  { name: "Home", href: "/home", type: "link" },
  { name: "Blog", href: "/blog", type: "link" },
  { name: "My Blog", href: "/myBlog", type: "link" },
  { name: "Contact", href: "/contact", type: "link" },
  // { name: "Faq", type: "link" },
];



const NavItem = (props) => {
  return (
    <li key={props.name}>
      <a href='/' className='text-gray-600 hover:text-gray-900'>{props.name}</a>
    </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className='bg-white shadow-md'>
        <div className='container mx-auto px-5 py-4 flex justify-between items-center'>
          <div>
            <img src={images.Logo} alt='logo' className='w-24 h-auto' />
          </div>
          <div className='flex gap-x-9 items-center'>
            <ul className='flex gap-x-5'>
              {navItemsInfo.map((item) => {
                return <NavItem key={item.name} name={item.name} />;
              })}
            </ul>
            <Link to="/logout" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Logout</Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
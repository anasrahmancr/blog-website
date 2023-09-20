import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const navItemsInfo = [
    { name: "Home", type: "link"},
    { name: "Articles", type: "link"},
    { name: "Pages", type: "link"},
    { name: "Pricing", type: "link"},
    { name: "Faq", type: "link"},
]

const NavItem = (props) => {
    return(
        <li key={props.name}>
            <a href='/'>{props.name}</a>
        </li>
    )
}

const Header = () => {
  return (
    
    <section>
      <header className='container mx-auto px-5 flex justify-between'>
        <div>
          <img src= {images.Logo} alt='logo'></img>
        </div>
        <div className='flex gap-x-9'>
           <ul className='flex gap-x-5'>
            {navItemsInfo.map((item)=>{
                return <NavItem key={item.name} name={item.name}/>
            })}
           </ul>
           <Link to="/login">Sign in</Link>
        </div>
      </header>
    </section>
  )
}

export default Header
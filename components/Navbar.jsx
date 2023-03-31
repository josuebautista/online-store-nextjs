import { useGlobalContext } from '@/context/StateContext';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './Cart';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useGlobalContext();
  
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={'/'}>VR Sound Store</Link>
      </p>
      <button type='button' className='cart-icon'  onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        {
          totalQuantities > 0 &&
          <span className="cart-item-qty">{totalQuantities}</span>
        }
      </button>
      { showCart && <Cart /> }
    </div>
  )
}

export default Navbar;
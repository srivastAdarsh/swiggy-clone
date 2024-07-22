import React from 'react';
import ResMenu from './ResMenu';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/Cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);


  const itemsRendered = [];

  const dispatch = useDispatch();
  const clearCartItems = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="mx-auto max-w-4xl">
      <button onClick={clearCartItems} className='px-2 mb-4 bg-white font-bold text-green-700 border-2 border-gray-500 rounded-xl'>Clear cart</button>
      {cartItems.map(item => <ResMenu key={item.card.info.id} itemCard={item} />)}
    </div>
  )
}

export default Cart;
import React from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons';
import '../styles/cart.css';

function Cart({setModal, modal}) {
  return (
    <ShoppingCartOutlined id='cart' onClick={()=>setModal(!modal)} />
  )
}

export default Cart;
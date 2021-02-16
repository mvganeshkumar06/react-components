import React, {useState} from "react";
import styles from "./Cart.module.css";

const Cart=()=>{

  const items={"Laptop":0,"Bag":0,"Headphones":0,"Mobile":0};

  const [cartItems,setCartItems]=useState(items);

  const addItemHandler=(item)=>{
    cartItems[item]+=1;
    setCartItems({...cartItems});
  }

  const removeItemHandler=(item)=>{
    if(cartItems[item]>0){
      cartItems[item]-=1;
    }
    setCartItems({...cartItems});
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Available Items</h1>
      {Object.keys(cartItems).map((item)=>{
        return (
        <div key={item} className={styles.cartItem}>
          <span>{item}</span>
          <span className={styles.btnContainer}> 
            <button onClick={()=>addItemHandler(item)} className={styles.btn}>+</button>
            <button onClick={()=>removeItemHandler(item)} className={styles.btn}>-</button>
          </span>
        </div>
        )
      })}
      <h1>Your cart</h1>
        {Object.keys(cartItems).map((item)=>{
        return (
          cartItems[item]>0 && <div key={item} className={styles.cartItem}>
            <span>{item}</span> 
            <span>{cartItems[item]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Cart;
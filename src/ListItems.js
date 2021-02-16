import React, {useState} from "react";
import styles from "./ListItems.module.css";

const ListItems=()=>{

  const items={"Laptop":false,"Bag":false,"Headphones":false,"Mobile":false};

  const [listItems,setListItems]=useState(items);

  const likeBtnHandler=(item)=>{
    if(listItems[item]){
        listItems[item]=false;
    }
    else{
        listItems[item]=true;
    }
    setListItems({...listItems});
  }

  return (
    <div className={styles.listItemsContainer}>
      <h1>Available Items</h1>
      {Object.keys(listItems).map((item)=>{
        return (
            <div key={item} className={styles.listItem}>
            <span>{item}</span>
            <span className={styles.btnContainer}> 
                <button onClick={()=>likeBtnHandler(item)} className={styles.btn}>{listItems[item]?"Dislike":"Like"}</button>
            </span>
            </div>
        )
      })}
      <h1>Your liked Items</h1>
        {Object.keys(listItems).map((item)=>{
        return (
          listItems[item] && <div key={item} className={styles.likedItem}>
            <span>{item}</span> 
          </div>
        )
      })}
    </div>
  )
}

export default ListItems;
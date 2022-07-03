import React from 'react';
import FavoriteItem from "./FavoriteItem";

export function FavoriteList(props){

    const {favoriteList} = props.userData;

    return(
        <section className="dashboard-favorite-list">
            <h3>لیست علاقمندی ها</h3>
            <div className="favorite-listItems-container">
            {
              favoriteList.length==0?
              <div>
                <h2 className="text-center">نتیجه ای  پیدا نشد !</h2>
              </div>:
              favoriteList.map((item, index)=> <FavoriteItem key={index} item={item} /> )
            }
            </div>
        </section>
    )
}
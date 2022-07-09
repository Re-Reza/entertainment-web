import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import {Link} from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../css/swiper.css";

import testImg from "../../pictures/download speed.png"
import { BASE_URL } from '../baseUrl';

export function MainPart(props){
    const {favoriteList, username, phoneNumber} = props.userData;

    return(
        <div className="dashboard-mainPart">

            <article className='dashboard-mainPart-box'>
                <div className='box-part d-flex justify-content-between'>   
                    <span className="d-flex align-items-center">
                        <span className="me-2 boxPart-iconContainer">
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        مورد علاقه ها
                    </span>

                    <span>
                        {favoriteList.length}
                    </span>
                </div>

                <div className='box-part d-flex align-items-center justify-content-between'>
                    <span className="d-flex align-items-center">
                        <span className="me-2 boxPart-iconContainer">
                            <i className="fa fa-credit-card" aria-hidden="true"></i>
                        </span>
                        موجودی حساب
                    </span>
                    <span>0</span>
                </div>

                <div className='box-part d-flex align-items-center justify-content-between'>
                    <span className="d-flex align-items-center">
                        <span className="me-2 boxPart-iconContainer">
                            <i className="fa fa-address-card" aria-hidden="true"></i>
                        </span>
                        وضعیت کاربری
                    </span>
                    <span>کاربر عادی</span>
                </div>

            </article>

            <article className="dashboard-swiperContainer">
                <h3 className="text-center mb-5">نشان شده ها</h3>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                    >
                        {
                            favoriteList.map((item, index) => {
                                const {category, type, movieId} = item;
                                return <SwiperSlide key={index}>

                                    <Link to={`${BASE_URL}${category}/${type}/${movieId}`}>
                                        <img src={item.coverPic}/>
                                        <h6>{item.title}</h6>
                                    </Link>

                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                </>
                
            </article>
            
            <article className="dashboard-mainPart-infoContainer">
                <h3 className="text-center mb-5">اطلاعات شما</h3>
                <div className="dashboard-mainPart-Info">
                    <div className='infoContainer'>
                        <label>نام کاربری</label>&nbsp;&nbsp;&nbsp;
                        <span className='info'>{username}</span>
                    </div>

                    <div className='infoContainer'>
                        <label>شماره تلفن</label>&nbsp;&nbsp;&nbsp;
                        <span className='info'>{phoneNumber}</span>
                    </div>
                </div>
            </article>

        </div>
    )
}
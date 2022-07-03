import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import categorizedContent from "../../api/categorizedApi";
import { CategorizedPart, TypeContainer } from "../categorizePart";
import "../../css/categorized.css";
import { Loading2 } from '../loading/Loading2';
import { Loading1 } from '../loading';
import { convertToPersian } from '../../converToPersian';


export function Categorized () {

    const [state, setState] = useState({
        movieTypes: [],
        loading: true,
    });

    const {category} = useParams();
    useEffect(()=>{
        categorizedContent.get( category+ ".json").then(response => {
            setState(previousState => ({
                ...previousState,
                movieTypes: response,
                loading: false,
            }))
        }).catch(error => console.log(error));
    }, [category])

    return (
        <div className="categoryContent-page">
            <section className="categoryContent-categorizedPart">
                <CategorizedPart />
            </section>

            {/* اضافه کردن لودینگ برای ه نوع فیلم یعنی 9 لودینگ یا قرار دادن لودینگ برای هر فیلم ! */}
            <h3 className="categoryContent-categoryTitle"><span>{convertToPersian(category)}</span></h3>
            {
                state.loading ?
                    <div className="categorized-loadingContainer">
                        <Loading2 />
                    </div>
                    :
                    <section className="categoryContent-movieTypes-Container">
                        {
                            state.movieTypes.map((item, index) => <TypeContainer loading={state.loading} movieType={{ ...item, category: category }} key={index} />)
                        }
                    </section>
            }
        </div>
    )
}

    //to add new data to database
    // useEffect(()=>{
    //     categorizedContent.post("movies/historical.json",{
    //         title:"جادوگر",
    //         coverPic:"https://static.cdn.asset.filimo.com/flmt/mov_118577_37568-m.jpg",
    //         description:"قدرت و جهانگیر و پری برای رهایی از دست قاچاقچیان تن به در خواست آنها داده و بی خبر از اینکه این دو نفر همان شخص مورد نظر نیستند اشتباها دو پیرزن را در میان راه سوار ماشینشان می کند. این کارشان باعث می شود تا قاچاقچیان فکر کنند آنها قصد پس ندادن اتومبیل را دارند، به همین جهت در تعقیب آنها حرکت می کنند و ...",
    //         comments:[],
    //         rate:0  ,
    //         movieUrl:"https://hajifirouz5.asset.aparat.com/aparat-video/4c040570219cf9d23e0be8c704758f8544879047-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJhODM2NDdjNDAyMjA5NTcwYWNhNDc5NjBmYzljYjNhIiwiZXhwIjoxNjU1NzQ5MzI1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.7qqiaaJn6Vl0ldbq5SVou3nSdLfNUDVkig-K9EkwlhY"
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(error => {console.log(error)})
    // },[])

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import categorizedContent from "../../api/categorizedApi";
import { CategorizedPart, TypeContainer, AllMovies } from "../categorizePart";
import "../../css/categorized.css";
import { Loading2 } from '../loading/Loading2';
import { Loading1 } from '../loading';
import { convertToPersian } from '../../converToPersian';


export function Categorized () {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    const {category} = useParams();
    
    useEffect(()=>{
        document.title=convertToPersian(category);
        categorizedContent.get( category=='all'?".json":category+ ".json").then(response => {
            setState(previousState => ({
                ...previousState,
                data: response,
                loading: false,
            }))
        }).catch(error => console.log(error));
    }, [category])

    return (
        <div className="categoryContent-page">
            <section className="categoryContent-categorizedPart">
                <CategorizedPart />
            </section>

            <h3 className="categoryContent-categoryTitle"><span>{convertToPersian(category)}</span></h3>
            {
                state.loading ?
                    <div className="categorized-loadingContainer">
                        <Loading2 />
                    </div>
                    :
                state.data.all?
                <section className="allData-section">
                {
                    state.data.content.map((item, index)=> <AllMovies currentIndex={index} endIndex={state.data.content.length-1} content={item} key={index}/>)
                }
                </section>
                :
                <section className="categoryContent-movieTypes-Container">
                {
                    state.data.content.map((item, index) => <TypeContainer borderBottom={state.data.content.length-1 == index ? false : true} loading={state.loading} movieType={{ ...item, category: category }} key={index} />)
                }
                </section>
            }
        </div>
    )
}

    //to add new data to database
    // useEffect(()=>{
    //     categorizedContent.post("series/family.json",{
    //         title:"جادوگر",
    //         coverPic:"https://static.cdn.asset.filimo.com/flmt/mov_118577_37568-m.jpg",
    //         description:"قدرت و جهانگیر و پری برای رهایی از دست قاچاقچیان تن به در خواست آنها داده و بی خبر از اینکه این دو نفر همان شخص مورد نظر نیستند اشتباها دو پیرزن را در میان راه سوار ماشینشان می کند. این کارشان باعث می شود تا قاچاقچیان فکر کنند آنها قصد پس ندادن اتومبیل را دارند، به همین جهت در تعقیب آنها حرکت می کنند و ...",
    //         comments:[],
    //         rate:0  ,
    //         movieUrl:"https://persian2.asset.aparat.com/aparat-video/4c040570219cf9d23e0be8c704758f8544879047-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjRkZjk3YmVmMzc1ZmI5MTIyODA3ODRlMzMzMTY2YzYzIiwiZXhwIjoxNjU2ODkyNzY3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.dGgRQhEWc0pkPBiECEyTnsnbRZpwJufrPdLueCO7aZg"
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(error => {console.log(error)})
    // })


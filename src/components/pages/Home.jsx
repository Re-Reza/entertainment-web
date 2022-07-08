import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {connect } from 'react-redux';
import { IoIosCart } from 'react-icons/io';

import contentApi from '../../api/contentApi';
import {setContent} from "../../statemanagement/actions/contentActions";

//import created components
import Slider from '../slider/Slider';
import {PopularItem, FeatureSection, CommonQuestions} from "../home-page-parts"
import {Loading2} from "../loading/Loading2";

//import style
import "../../css/home.css"

function mapStateToProps(state){
    //console.log(state); //whole store
    return {
        movies : state.contentState.movies,
        series : state. contentState.series
    }
}

function mapDispatchToProps(dispatch) {
    return{
        setContent : function(data){
            dispatch( setContent(data) );
        }
    }
}

//will connect redux to component
const ConnectedComponent = connect(mapStateToProps , mapDispatchToProps)
(function(props){
    
    console.log('home');
    const {setContent, movies, series } = props;
    const[state, setState] = useState({
        popularLoading : true,
    })

    useEffect(()=>{
        document.title="صفحه اصلی";
        contentApi.get('content.json').then(response => {
            setContent(response);
            setState({
                ...state,
                popularLoading : false
            })

        }).catch(error=>{
            console.log(error);
        })
    }, [])

    function filterPopularMovies(){
        const popular = Object.entries(movies).map(item=>{
            let mostPopular = item[1][0];
            item[1].forEach(movie=>{
                if(movie.rate> mostPopular.rate)
                    mostPopular = movie;
            });
            return mostPopular;
        });
        return popular;
    }

    function filterPopularSeries(){
        const popular = Object.entries(series||{}).map(item=>{
            let mostPopular = item[1][0];
            item[1].forEach(movie=>{
                if(movie.rate> mostPopular.rate)
                    mostPopular = movie;
            });
            return mostPopular;
        });
        return popular;
    }

    return (
        <div className="home-mainContainer">

            <section className="home-sliderContainer">
                <Slider/>
                <article className="home-sliderText-container">
                    <h2 className="slider-text-title">سينما آنلاين</h2>
                    <p className="text-white fs-5">با سینما آنلاین سینما را به خانه خود بیاورید</p>
                    <button className="slider-buy-btn btn btn-success">
                        <IoIosCart className="slider-btn-icon"/>
                        خرید اشتراک
                    </button>
                </article>
            </section>

            <section className="home-popular">
                
                {/* divide this part to components */}
                <article className="home-popular-container home-popular-movies">
                    <h3>محبوب ترین فیلم ها</h3>
                    <div className="home-popular-movie-container">
                    {
                        state.popularLoading?
                        <div className="home-popular-loader">
                            <Loading2/>
                        </div>
                        :
                        filterPopularMovies().map((item, index)=><PopularItem item={item} key={index}/>)
                    }
                    </div>
                </article>

                <article className="home-popular-container home-popular-series">
                    <h3>محبوب ترین سریال ها</h3>
                    <div className="home-popular-movie-container">
                    {
                        state.popularLoading?
                        <div className="home-popular-loader">
                            <Loading2/>
                        </div>
                        :
                        filterPopularSeries().map((item, index)=><PopularItem item ={item} key={index}/>)
                    }
                    </div>    
                </article>

            </section>
              
            <section className="home-feature-section">
                <FeatureSection/>
            </section>

            <section className='common-questions-section'>
                <CommonQuestions/>
            </section>

        </div>
    )
});

export function Home(){
    return(
        <ConnectedComponent/>
    )
}
import React from "react";
import SliderItem from "./SliderItem";
import img1 from "./slider-imgs/7.jpg";
import img2 from "./slider-imgs/8.jpg";
import img3 from "./slider-imgs/g2.jpg";
import "../../css/slider.css";

function Slider(){

    const [state, setState] = React.useState({
        imgs:[
            'https://www.filimo.com/public/public/filemanager/homeslider/vz6r5_desktop_1_v1.jpg',
            'https://www.filimo.com/public/public/filemanager/homeslider/nosax_desktop_1_v1.jpg',
            'https://static.cdn.asset.filimo.com/flmt/mov_cvr_116350_593.jpg',
            'https://static.cdn.asset.filimo.com/flmt/mov_cvr_119257_890.jpg'
        ],
        shownItem:0
    });

    React.useEffect(()=>{
        setTimeout(()=>{
            setState({
                ...state,
                shownItem: (state.shownItem+1) % state.imgs.length
            })
        },5000)
    }, [state.shownItem])

    return(
        <div className="slider">    
            {
                state.imgs.map((item, index)=><SliderItem showImg={index==state.shownItem?"show-img":""} imgSrc={item} key={index}/>)
            }
        </div>
    )
}

export default Slider;
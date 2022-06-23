import React from "react";
import SliderItem from "./SliderItem";
import img1 from "./slider-imgs/7.jpg";
import img2 from "./slider-imgs/8.jpg";
import img3 from "./slider-imgs/g2.jpg";
import "../../css/slider.css";

function Slider(){

    const [state, setState] = React.useState({
        imgs:[
            img1,
            img2,
            img3
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
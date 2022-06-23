import React from "react";

function SliderItem(props){

    return (
        <img className={"slider-imgItem "+props.showImg} src={props.imgSrc}></img>
    )
}

export default SliderItem;
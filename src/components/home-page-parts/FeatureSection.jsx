import React from 'react';
import img1 from "../../pictures/download speed.png";
import img2 from "../../pictures/great quality.png";
import img3 from "../../pictures/gurantee.png";
import img4 from "../../pictures/safe payment.png";



export function FeatureSection() {
    return (
        <>
            <h3 className="mb-4"><span className="red">سینما</span> <span className="yellow">آنلاین</span> هر لحظه با شماست</h3>
            <p>با خرید اشتراک هر لحظه در هر مکان از فیلم دیدن لذت ببرید</p>

            <article className="home-feature-section-itemsContainer">
                <div>
                    <img src={img3} alt="feature item image"/>
                    <h5>پشتیبانی ۲۴ ساعته</h5>
                </div>
                <div>
                    <img src={img2} alt="feature item image"/>
                    <h5>سریع و در دسترس</h5>
                </div>
                <div>
                    <img src={img1} alt="feature item image"/>
                    <h5>تنوع در دسته بندی ها</h5>
                </div>
                <div>
                    <img src={img4} alt="feature item image"/>
                    <h5>پرداخت امن و مطمئن</h5>
                </div>

            </article>
        </>
    )
}
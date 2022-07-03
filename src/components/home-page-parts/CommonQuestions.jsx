import React from 'react';

export const CommonQuestions = ()=> {


    //بهتر نوشتن این بخش و نکته راجب سلکتور
    function showAnswer(event){
        let elements = document.getElementsByClassName("common-questions-answer");
        const sibling = event.target.nextSibling;
        for(let i =0; i<elements.length; i++){
            if(elements[i] == sibling) continue;
            elements[i].classList.add("close");
        }
        const questions = document.getElementsByClassName("question");
        for(let i = 0; i<questions.length; i++)
        {
            if(questions[i]==event.target) continue;
            questions[i].querySelector("i.fa").classList.remove("exit-style");
        }
        event.target.querySelector("i.fa").classList.toggle("exit-style");
        sibling.classList.toggle("close");
    }

    return(
        <div className="common-questions-container">
            <h2>سوالات متداول</h2>

            <ul>
                <li className="common-question">
                    <span onClick={ showAnswer} className="question">سینما آنلاین چیست؟<i className="fa fa-plus" aria-hidden="true"></i></span>
                    <div className="common-questions-answer close">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . 
                    </div>
                </li>
                <li className="common-question">
                    <span onClick={ showAnswer} className="question">چگونه از سینما آنلاین استفاده کنم؟<i className="fa fa-plus" aria-hidden="true"></i></span>
                    <div className="common-questions-answer close">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . 
                    </div>
                </li>
                <li className="common-question">
                    <span onClick={ showAnswer} className="question">سینما آنلاین در چه دستگاه هایی قابل استفاده است؟<i className="fa fa-plus" aria-hidden="true"></i></span>
                    <div className="common-questions-answer close">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . 
                    </div>
                </li>
                <li className="common-question">
                    <span onClick={ showAnswer} className="question">آیا سینما آنلاین برای کودکان مناسب است؟<i className="fa fa-plus" aria-hidden="true"></i></span>
                    <div className="common-questions-answer close">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . 
                    </div>
                </li>
                <li className="common-question">
                    <span onClick={ showAnswer} className="question">تعرفه های سینما آنلاین چگونه است؟<i className="fa fa-plus" aria-hidden="true"></i></span>
                    <div className="common-questions-answer close">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . 
                    </div>
                </li>
            </ul>



        </div>
    )
}
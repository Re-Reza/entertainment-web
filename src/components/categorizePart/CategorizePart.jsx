import React from 'react';
import DropDown from "./DropDown";
import "../../css/categorizePart.css";

export function CategorizedPart(props) {


    const submitChanges = () =>{
        props.dispatch({
            type:"SET_SUBMIT_STATUS",
            payload: null,
        })
    }

    const optionList1 = [
        {name:'سريال',value:'series'},
        {name:'فیلم',value:'movies'},
        {name:'همه',value:'all'} //still vauge
    ]
    const optionList2 = [
        {name:'اکشن',value:'action'},
        {name:'تاریخی',value:'historical'},
        {name:'خانوادگی',value:'family'},
        {name:'انیمیشن',value:'animation'},
        {name:'عاشقانه',value:'drama'},
        {name:'مستند',value:'documentary'},
        {name:'وحشت',value:'horrific'},
        {name:'کمدی',value:'comedy'},
        {name:'علمی تخیلی',value:'imaginary'}]
        
        return (
        <div className="CategorizedPart">
            <DropDown key={1} isCategory={true} options={optionList1} />
            <DropDown key={2} isCategory={false} options={optionList2} />
            <button onClick={submitChanges} type="button" className="btn btn-warning">اعمال فيلتر</button>
        </div>
    )
}


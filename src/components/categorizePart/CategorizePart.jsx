import React, {useState} from 'react';
import {useNavigate} from "react-router";

import DropDown from "./DropDown";
import {BASE_URL} from "../baseUrl";
import "../../css/categorizePart.css";

export function CategorizedPart() {

    const [ state, setState] = useState({
        category : null,
        type : null
    });
    const navigate = useNavigate();


    function setCategoryAndType(key ,value){
        console.log(key);
        console.log(value);
        setState({
            ...state,
            [key] : value 
        })
    }

    const requestNewContent = () =>{
        const {category, type} = state;
        console.log(state);
        if(category != null)
        {
            console.log("navigate");
            navigate(`${BASE_URL}${category.value}${type ? "/"+type.value:""}`);
        }
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
        {name:'علمی تخیلی',value:'imaginary'}
    ]
        
        return (
        <div className="CategorizedPart">
            <DropDown key={1} navigateState = {state} setNavigateState = {setCategoryAndType} isCategory={true} options={optionList1} />
            <DropDown key={2} navigateState = {state} setNavigateState = {setCategoryAndType} isCategory={false} options={optionList2} />
            <button onClick={requestNewContent} type="button" className="btn btn-warning">اعمال فيلتر</button>
        </div>
    )
}


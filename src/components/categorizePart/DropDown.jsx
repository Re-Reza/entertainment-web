import React, {useState} from "react";

function DropDown(props){

    const [state, setState] = useState({
        show:false
    });
    const{options, navigateState, isCategory, setNavigateState} =  props;
    const {category, type} = navigateState;

    const keyOfNavigateState = isCategory ?  "category" : "type";

    return(
        <div className="DropDown">
           
            <div onClick={()=>{setState({...state, show:!state.show})}} className="DropDown-select">
                {
                    isCategory ? 
                    <span>{category == null? "انتخاب کنید": category.name }</span>
                    :
                    <span>{ type == null? "انتخاب کنید": type.name }</span>            
                }
                {
                    state.show?
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    :
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                }
            </div>

            <ul className={state.show?"show DropDown-options":"DropDown-options"}>
                {
                    options.map((item, index)=>
                    <li onClick={()=>setNavigateState(keyOfNavigateState, item)} value={item.value} key={index}>{item.name}</li>)
                }
            </ul>

        </div>
    )

}

export default DropDown;
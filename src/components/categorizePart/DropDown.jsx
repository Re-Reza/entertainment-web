import React, {useState} from "react";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return{
        category:state.categorizeState.category,
        type:state.categorizeState.type
    }
}

export default connect(mapStateToProps)(DropDown)

function DropDown(props){
    const {options, category, type, dispatch, isCategory} = props;
    const [state, setState] = useState({
        show:false
    })

    function changeSelectedItem(item){
        console.log(item)
        if(isCategory)
        {
            dispatch({
                type:"SET_CATEGORY",
                payload:item
            });
        }
        else{
            dispatch({
                type:"SET_TYPE",
                payload:item
            });
        }
    }

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
                    <li onClick={changeSelectedItem.bind(this, item)} value={item.value} key={index}>{item.name}</li>)
                }
            </ul>

        </div>
    )

}

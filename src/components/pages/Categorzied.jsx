import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import categorizedContent from "../../api/categorized";
import CategorizedPart from "../categorizePart/CategorizePart";
import {connect} from "react-redux";
import "../../css/categorized.css";

function mapStateToProps(state) {
    return{
        category:state.categorizeState.category,
        type:state.categorizeState.category,
        submit : state.categorizeState.submit
    }
}

const ConnectedComponent = connect(mapStateToProps)(function (props){

    const [state, setState] = useState({

    })
    const { category } = useParams();
    useEffect(() => {

        const url = props.category==null ? category :props.category.value;
        console.log(url)
        categorizedContent.get(url).then(response => {
            console.log(response);
        }).catch(error => console.log(error));

    }, [category, props.submit]);

    return (
        <div className="categoryContent-page">
            <section className="categoryContent-categorizedPart">
                <CategorizedPart dispatch = {props.dispatch} />
            </section>

            <section>
                {/* for items ... gotton movies from server! */}
            </section>
        </div>
    )
})

export function Categorized() {
    return(
        <ConnectedComponent/>
    )
}
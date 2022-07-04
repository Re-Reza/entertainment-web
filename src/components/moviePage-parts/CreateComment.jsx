import React,{useState} from 'react';
import axios from "axios";
import {Loading4} from "../loading";

export function CreateComment(props) {
    const {category, type, movieId} = props.moviePath;
    const {username, addToComments} = props;
    const [state, setState] = useState({
        loading: false,
    });

    function shareComment(event){
        event.preventDefault();
        const textarea = document.getElementById("comment-textarea");
        textarea.style.border=""
        if(textarea.validity.valid == true){
            const text = textarea.value;
            const date = new Date(); 
            const commentData = {
                text,
                time: date.getHours(),
                date: new Date().toLocaleDateString('fa-IR'),
                user:username
            }
            setState({loading: true})
            axios.post(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/${category}/${type}/${movieId}/comments.json`, commentData)  
            .then((response)=>{
                setState({loading: false}); /*this command will go to event loop and other commands
                                              will operate when event loop will check and setState
                                              will operate*/ 
                textarea.value="";
                addToComments(commentData);
            }).catch(error => console.log(error))
        }
        else{
            textarea.style.border="2px solid red";
        }
    }

    return(
        <form noValidate id="form-createComment" onSubmit ={shareComment} >
            <textarea required id="comment-textarea" minLength="3">
            </textarea>
            <div className="createComment-btnContainer">
                <button type="submit" className="btn me-2 btn-success">اشتراک گذاری <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                {
                    state.loading?
                    <Loading4/>:<></>
                }
            </div>
        </form>
    )
}
import React, {useState} from 'react';

export function HeadPart(props){
    
    const {movieUrl, title, coverPic} = props.movieData;

    const [state, setState] = useState({
        play:false,
    });

    const {play} = state;

    function playMovie(){
        setState({
            ...state,   
            play:true
        });
        
    }

    return(
        <>
            <div className="MoviePage-head-imgContainer">

                {
                    play?
                    <video controls width="100%" height="300px">
                        <source src={movieUrl}/>
                    </video>:
                    <>
                        <img src={coverPic} alt={title} />
                        <div className="MoviePage-playButton">
                            <i onClick={playMovie} className="fa fa-play-circle-o" aria-hidden="true"></i>
                        </div>
                    </>
                }

            </div>
        </>
    )
}
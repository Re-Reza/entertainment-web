import Header from './Header';
import {useLocation} from "react-router-dom";

function HeaderContainer(){

    const location = useLocation();

    if(location.pathname == "/signin")
        return(
            <></>
        )

    return(
        <Header/>
    )

}

export default HeaderContainer;
import Header from './Header';
import {useLocation} from "react-router-dom";
import {BASE_URL} from "../baseUrl";

function HeaderContainer(){

    //باید بخش مربوط به اپلود طلاعات از سرور به استیت کانتکست در یک فای جداگانه باشد و با فراخوانی داشپورد یا هدر اجرا شود
    const location = useLocation();
    const {pathname} = location;
    if(pathname == BASE_URL+"signin" || pathname ==  BASE_URL+"dashboard")
        return(
            <></>
        )

    return(
        <Header/>
    )

}

export default HeaderContainer;
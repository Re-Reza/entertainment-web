import Header from './Header';
import {useLocation} from "react-router-dom";

function HeaderContainer(){

    //باید بخش مربوط به اپلود طلاعات از سرور به استیت کانتکست در یک فای جداگانه باشد و با فراخوانی داشپورد یا هدر اجرا شود
    const location = useLocation();
    const {pathname} = location;
    if(pathname == "/signin" || pathname == "/dashboard")
        return(
            <></>
        )

    return(
        <Header/>
    )

}

export default HeaderContainer;
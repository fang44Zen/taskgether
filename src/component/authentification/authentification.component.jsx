import './main-auth.styles.scss'
import SignIn from "../authentification-components/sign-in.components";
import SignUp from "../authentification-components/sign-up.component";

 const Authentification = () =>{

    return(
        <div className='authentification-main'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentification;
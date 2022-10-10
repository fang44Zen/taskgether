
import './authentification.styles.scss';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, signInWithGooglePopup, creatUserDocumentFromAuth} from'../../firebase/firebase-config';



 const Authentification = () =>{
    const [emailUser, setEmailUser] = useState("");
    const [passUser, setPassUser] = useState("");

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        creatUserDocumentFromAuth(user)

    }

    const readEmail = (e) => {
        const email = e.target.value;
        setEmailUser(email);
    }
    const readPass = (e) => {
        const pass = e.target.value;
        setPassUser(pass);
    }

    const createAccountButton = () =>{
        createUserWithEmailAndPassword(auth, emailUser, passUser)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        
        console.log(emailUser);
        console.log(passUser);
    }

    
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form className='form-auth'>
                    <div className='form-block'>
                        <input type="text" className='form-block__input' required/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">mail</span>
                            Email
                        </label>
                    </div>
                    <div className='form-block'>
                        
                        <input type="text"className='form-block__input' required/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Password
                        </label>
                    </div>
                    <button className='connect-button'>Enter</button>
                </form>
            </div>
            <div className="create-account">
                <h1>Create an account:</h1>
                
                <form className='form-auth'>
                    <div className='form-block'>
                        <input type="text" className='form-block__input' required onChange={readEmail} value={emailUser} />
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">mail</span>
                            Email
                        </label>
                    </div>
                    <div className='form-block'>
                        <input type="password" className='form-block__input' required value={passUser} onChange={readPass}/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Password
                        </label>
                    </div>
                    <div className='form-block'>
                        <input type="password"className='form-block__input' required/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Confirm Password
                        </label>
                    </div>
                    <div className='buttons-create-account'>
                        <button className='buttons-create-account__bca' onClick={createAccountButton}>Create Acount</button>
                        <button className='buttons-create-account__bCAWG' onClick={logGoogleUser}><FcGoogle />Connect with google</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Authentification;
import './authentification.styles.scss';
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    creatUserDocumentFromAuth} from '../../firebase/firebase-config';
import { FcGoogle } from 'react-icons/fc';

const defaultFormField = {
    email: '',
    password: ''
}

const SignIn = () =>{
    const [formField, setFormField] = useState(defaultFormField);
    const {email, password} = formField;

    const resetFormFields = () =>{
        setFormField(defaultFormField);
    };

    const handlerChange= (e) =>{
        const { name, value } =e.target;
        setFormField({...formField, [name]:value});
    };

    const signInSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrongpassword':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert("incorrect email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user);
    }

    return(
        <div className="connect-account">
            <h1>Already have an account:</h1>
            <form className='form-auth' onSubmit={signInSubmit}>
                <div className='form-block'>
                    <input type="email" className='form-block__input' required onChange={handlerChange} name="email" value={email}/>
                    <label className='form-block__label'>
                        <span class="material-symbols-outlined auth-icon">mail</span>
                        Email
                    </label>
                </div>
                <div className='form-block'>
                    <input type="password"className='form-block__input' required onChange={handlerChange} name="password" value={password}/>
                    <label className='form-block__label'>
                        <span class="material-symbols-outlined auth-icon">lock</span>
                        Password
                    </label>
                </div>
                <div className='connect-buttons'>
                    <button className='connect-button' type='submit'>Enter</button>
                    <button className="google-connect" type="button" onClick={logGoogleUser}>
                        <FcGoogle />Connect with google
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
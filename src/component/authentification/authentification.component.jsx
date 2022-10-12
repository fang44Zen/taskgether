
import './authentification.styles.scss';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { signInWithGooglePopup, 
    creatUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword} from'../../firebase/firebase-config';
import photoURL from '../../assets/utilisateur.png';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


 const Authentification = () =>{

    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;

    const halderChange = (e) =>{
        const { name, value } =e.target;
        setFormField({...formField, [name]:value});
    };

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password == confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                await creatUserDocumentFromAuth(user, {displayName,photoURL})
            }catch(error){
                console.log(error);
            }
            
            
        }else{
            alert("wrong password");
            return
        }
    }
    
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form className='form-auth'>
                    <div className='form-block'>
                        <input type="email" className='form-block__input' required/>
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
                <form className='form-auth' onSubmit={handleSubmit}>
                <div className='form-block'>
                        <input type="text" className='form-block__input' required onChange={halderChange} name="displayName" value={displayName}/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">account_circle</span>
                            Username
                        </label>
                    </div>
                    <div className='form-block'>
                        <input type="email" className='form-block__input' required onChange={halderChange}  name="email" value={email}/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">mail</span>
                            Email
                        </label>
                    </div>
                    <div className='form-block'>
                        <input type="password" className='form-block__input' required onChange={halderChange} name="password" value={password}/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Password
                        </label>
                    </div>
                    <div className='form-block'>
                        <input type="password"className='form-block__input' required onChange={halderChange} name="confirmPassword" value={confirmPassword}/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Confirm Password
                        </label>
                    </div>
                    <div className='buttons-create-account'>
                        <button className='buttons-create-account__bca' type='submit' >Create Acount</button>
                        <button className='buttons-create-account__bCAWG' onClick={logGoogleUser}><FcGoogle />Connect with google</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Authentification;
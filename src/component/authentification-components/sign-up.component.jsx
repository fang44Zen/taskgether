import './authentification.styles.scss';
import { useState } from 'react';
import {createAuthUserWithEmailAndPassword,
    creatUserDocumentFromAuth,} from'../../firebase/firebase-config';
import photoURL from '../../assets/utilisateur.png';


const defaultSignUpFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () =>{
    const [formField, setFormField] = useState(defaultSignUpFormField);
    const {displayName, email, password, confirmPassword} = formField;

    const handlerChangeSignUp = (e) =>{
        const { name, value } =e.target;
        setFormField({...formField, [name]:value});
    };

    const signUpSubmit = async (event) =>{
        event.preventDefault();
        if(password === confirmPassword){
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
    };

    return (
      <div className="create-account">
        <h1>Create an account:</h1>
        <form className="form-auth" onSubmit={signUpSubmit}>
          <div className="form-block">
            <input
              type="text"
              className="form-block__input"
              required
              onChange={handlerChangeSignUp}
              name="displayName"
              value={displayName}
            />
            <label className="form-block__label">
              <span class="material-symbols-outlined auth-icon">
                account_circle
              </span>
              Username
            </label>
          </div>
          <div className="form-block">
            <input
              type="email"
              className="form-block__input"
              required
              onChange={handlerChangeSignUp}
              name="email"
              value={email}
            />
            <label className="form-block__label">
              <span class="material-symbols-outlined auth-icon">mail</span>
              Email
            </label>
          </div>
          <div className="form-block">
            <input
              type="password"
              className="form-block__input"
              required
              onChange={handlerChangeSignUp}
              name="password"
              value={password}
            />
            <label className="form-block__label">
              <span class="material-symbols-outlined auth-icon">lock</span>
              Password
            </label>
          </div>
          <div className="form-block">
            <input
              type="password"
              className="form-block__input"
              required
              onChange={handlerChangeSignUp}
              name="confirmPassword"
              value={confirmPassword}
            />
            <label className="form-block__label">
              <span class="material-symbols-outlined auth-icon">lock</span>
              Confirm Password
            </label>
          </div>
          
            <button className="buttons-create-account__bca" type="submit">
              Create Acount
            </button>
        </form>
      </div>
    );
}

export default SignUp;

import './authentification.styles.scss';
import { FcGoogle } from 'react-icons/fc';

 const Authentification = () =>{
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
                    <div className='form-block'>
                        <input type="text"className='form-block__input' required/>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Confirm Password
                        </label>
                    </div>
                    <div className='buttons-create-account'>
                        <button className='buttons-create-account__bca'>Create Acount</button>
                        <button className='buttons-create-account__bCAWG'><FcGoogle />Connect with google</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Authentification;
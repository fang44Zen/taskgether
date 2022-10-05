import FormInput from '../modified basics components/input/form-input.component';
import './authentification.styles.scss'


 const Authentification = () =>{
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form className='form-auth'>
                    
                    <FormInput label={[<span class="material-symbols-outlined auth-icon">mail</span>, "Email"]} placeholder="Email"/>
                    
                    <FormInput label={[<span class="material-symbols-outlined auth-icon">lock</span>,"Password"]} placeholder="Password"/>
                    <button>Enter</button>
                </form>
            </div>
            <div className="create-account">
                <h1>Create an account:</h1>
            </div>
            
        </div>
    )
}

export default Authentification;
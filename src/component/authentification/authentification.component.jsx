import FormInput from '../modified basics components/input/form-input.component';
import './authentification.styles.css'


 const Authentification = () =>{
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form>
                    <span class="material-symbols-outlined auth-icon">mail</span>
                    <FormInput label="Email" value='' className="input-auth"/>
                    <span class="material-symbols-outlined auth-icon">lock</span>
                    <FormInput label="Password" value=""/>
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

import './authentification.styles.scss'


 const Authentification = () =>{
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form className='form-auth'>
                    <div className='form-block'>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">mail</span>
                            Email
                        </label>
                        <input type="text" placeholder='Email' className='form-block__input'/>
                    </div>
                    <div className='form-block'>
                        <label className='form-block__label'>
                            <span class="material-symbols-outlined auth-icon">lock</span>
                            Password
                        </label>
                        <input type="text" placeholder='Password' className='form-block__input'/>
                    </div>
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
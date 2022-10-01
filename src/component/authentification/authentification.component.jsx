import './authentification.styles.css'


 const Authentification = () =>{
    return(
        <div className='authentification-main'>
            <div className="connect-account">
                <h1>Already have an account:</h1>
                <form>
                    <span class="material-symbols-outlined">mail</span>
                    <label>Email:</label>
                    <input type="email" placeholder="email or phone"/>
                    <span class="material-symbols-outlined">lock</span>
                    <label>Password:</label>
                    <input type="password" placeholder='password'/>
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
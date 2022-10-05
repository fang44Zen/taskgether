import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) =>{
    return(
        
        <div className="group">
            <input className="group__input" {...otherProps}/>
            <label className='group__label'>{label}</label>
        </div>
    )
}

export default FormInput;
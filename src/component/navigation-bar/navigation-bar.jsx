import { NavLink, Outlet } from "react-router-dom";
import "./navigation-bar.css";


const NavigationBar = () =>{
    
    return(

        <div className="nav-bar-style">
            
            <h1 className="main-title">TaskGether</h1>
            <NavLink className="center-link" to='/home'>Home</NavLink>
            <NavLink className="center-link" to='/todo-app'>Todo</NavLink>
            <NavLink className="center-link" to='/pomodoro-app'>Pomodoro</NavLink>
            <NavLink className="center-link signin-link" to='/auth'>Sign in</NavLink>
           
            <Outlet />
        </div>
       
    )
}

export default NavigationBar;
import "./login.scss";
import { Icon } from '@iconify/react';
import Shapescreen from './Shapescreen';
import Sociallogin from './Sociallogin';
import {Link} from "react-router-dom";
function Signin() {  
        return (
                <div className="log">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user">
                                    <Icon icon="zmdi:account" />
                                    </i>
                                    <input type="text" className="login__input" placeholder="User name / Email"/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock">
                                    <Icon icon="zmdi:lock" />
                                    </i>
                                    <input type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <Link to="/index">
                                <button className="button btn__submit">
                                
                                    <span className="button__text">
                                    Log In Now</span>
                                    <i className="button__icon fas fa-chevron-right">
                                         <Icon icon="zmdi:chevron-right" />
                                    </i>
                                </button>
                                </Link>	
                                <button className="button btn__submit">
                                    <span className="button__text">anonymous login</span>
                                    <i className="button__icon fas fa-chevron-right">
                                    <Icon icon="fluent:person-question-mark-20-filled" />
                                    </i>
                                </button>	
                                <div className="CTA">
                                <Link to="/register" className="switch">Register</Link>
                                </div>			
                            </form>
                            <Sociallogin/>
                        </div>
                        <Shapescreen/>	
                    </div>
                </div>
        )
    }
export default Signin;
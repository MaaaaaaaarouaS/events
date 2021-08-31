import "./login.scss";
import { Icon } from '@iconify/react';
import Shapescreen from './Shapescreen';
import {Link} from "react-router-dom";
function Signup() {  
    return (
                <div className="log">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="signup">
                                <div className="login__field">
                                    <i className="login__icon">
                                    <Icon icon="zmdi:account" />
                                    </i>
                                    <input type="text" className="login__input" placeholder="Name"/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon">
                                    <Icon icon="cib:mail-ru" />
                                    </i>
                                    <input type="text" className="login__input" placeholder="Email"/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon">
                                    <Icon icon="fluent:text-description-20-filled" />
                                    </i>
                                    <textarea type="text" className="login__input" placeholder="Location "/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock">
                                    <Icon icon="zmdi:lock" />
                                    </i>
                                    <input type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <button className="button btn__submit">
                                    <span className="button__text">Sign Up Now</span>
                                    <i className="button__icon">
                                         <Icon icon="zmdi:chevron-right" />
                                    </i>
                                </button>
                                <div className="CTA">
                                <Link to="/" className="switch">I have an account</Link>
                                </div>	
                            </form>
                        </div>
                        <Shapescreen/>		
                    </div>
                </div>
        )
    }
export default Signup;



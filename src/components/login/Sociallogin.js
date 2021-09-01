import { Icon } from '@iconify/react';
function Sociallogin() {
    return (
                <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">             
                        <a  className="social-login__icon fab fa-instagram">
                        <Icon icon="akar-icons:facebook-fill" />
                        </a>
                        <a className="social-login__icon fab fa-facebook">
                        <Icon icon="zmdi:google-plus" />
                        </a>
                    </div>
                </div>
        )
    }
export default Sociallogin;
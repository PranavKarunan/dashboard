import React from 'react'

function Signin() {
    return (
        <div className='container'>
            <div className="signin-left">
                <div className="left-part">
                    <div className="logo">
                        <img src="assets/icons/home-logo.png" alt="" />
                    </div>
                    <div className="base-text">
                        <span>BASE</span>
                    </div>
                </div>
                <div className="right-part"></div>
            </div>
            <div className="signin-right">
                <div className="top">
                    <div className="signin">
                        <span>Sign In</span>
                    </div>
                    <div className="description">
                        <span>Sign into your account </span>
                    </div>

                    <div className="sign-in-with">
                        <div className="signinwith-logo">
                            <div className="signin-with-logo">
                                <img src="assets/icons/google.png" alt="" />
                            </div>
                            <div className="signin-with-text">
                                <span>Sign in with Google</span>
                            </div>
                        </div>
                        <div className="signinwith-logo">
                            <div className="signin-with-logo">
                                <img src="assets/icons/apple.png" alt="" />
                            </div>
                            <div className="signin-with-text">
                                <span>Sign in with Apple</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bottom">
                    <div className="signin-form">
                        <div className="formGroup">
                            <label className="labelText">Email address</label>
                            <input
                                type="text"
                                className="MainInput"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="formGroup">
                            <label className="labelText">Password</label>
                            <input
                                type="password"
                                className="MainInput"
                                placeholder="Password"
                            />
                        </div>
                        <div className="forgot-password">
                            <span>Forgot Password?</span>
                        </div>
                        <div className="submit-button">
                            <input type="button" value="Submit" />
                        </div>
                    </div>
                    <div className="register">
                        <span className='account'>Don't have an account?</span>
                        <span className='register-here'>Register here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
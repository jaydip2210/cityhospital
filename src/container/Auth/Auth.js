import React, { useState } from 'react';
import Button from '../../components/Ui/Button/Button';


function Auth(props) {
    const [type, setType] = useState('login');
    // const [password, setPassword] = useState('forget');

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <h2>Login</h2> : type === 'signUp' ? <h2>SignUp</h2> : <h2>Forget password</h2>
                        }
                        {/* <h2>Login / SignUp</h2> */}
                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signUp' ? <div className="col-md-8 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div> : null
                            }
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            </div>

                            {
                                type === 'login' || type === "signUp" ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="password" id="phone" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div> : null
                            }
                        </div>
                        <div className="text-center">
                            {
                                type === 'login' ? <Button type="submit">Login1</Button> : 
                                type === 'signUp' ? <Button btnType="Secondary" type="submit">SignUp</Button> :
                                    <Button btnType="Outline" type="submit">submit</Button>     
                            }
                        </div>
                    </form>

                    {
                        type === 'login' ? <span>Create an Account:<a href='#' onClick={() => setType('signUp')}>SignUp</a></span>
                            :
                            <span>Already have an Account:<a href='#' onClick={() => setType('login')}>Login</a></span>
                    }
                    <br></br>
                    {
                         type === 'login' ? <span>Forget Password:<a href='#' onClick={() => setType('forget')}>Forget</a></span> : null
                    }
                    <h1>button</h1>
                </div>
            </section>
        </main>
    );
}

export default Auth;
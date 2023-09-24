import React, { useState } from 'react';
import Button from '../../components/Ui/Button/Button';
import Input from '../../components/Ui/Inputbox/Input';
import { Heading } from '../../components/Ui/Heading/Heading';

function Auth(props) {
    const [type, setType] = useState('login');
    // const [password, setPassword] = useState('forget');

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <Heading>Login</Heading> : type === 'signUp' ? <Heading>SignUp</Heading> : <Heading>Forget password</Heading>
                        }
                        {/* <h2>Login / SignUp</h2> */}
                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signUp' ? <div className="col-md-8 form-group">
                                    <Input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div> : null
                            }
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            </div>

                            {
                                type === 'login' || type === "signUp" ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <Input type="tel" className="form-control" name="password" id="phone" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div> : null
                            }
                        </div>
                        <div className="text-center">
                            {
                                type === 'login' ? <Button type="submit" disabled={true}>Login</Button> : 
                                type === 'signUp' ? <Button btnDisabled={true} btnType="Secondary" type="submit">SignUp</Button> :
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
                </div>
            </section>
        </main>
    );
}

export default Auth;
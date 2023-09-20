import React, { useState } from 'react';

function Auth(props) {
    const [type, setType] = useState('login');
    const [password, setPassword] = useState('forget');

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <h2>Login</h2> : <h2>SignUp</h2>
                        }

                        {
                            password === 'forget' ? null : <h2>Forget password</h2>
                        }
                        {/* <h2>Login / SignUp</h2> */}
                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            <div className="col-md-8 form-group">
                                {
                                    type === 'login' ? null : <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                }
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    password === 'forget' ? <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        :
                                        null
                                }

                            </div>
                        </div>
                        <div className="text-center">
                            {
                                type === 'login' ? <button type="submit">Login</button> : <button type="submit">SignUp</button>
                            }

                        </div>
                    </form>

                    {
                        type === 'login' ? <span>Create an Account:<button onClick={() => setType()}>SignUp</button></span>
                            :
                            <span>Already have an Account:<button onClick={() => setType('login')}>Login</button></span>
                    }
                    <br></br>
                    {
                        password === 'forget' ? <span>Forget password:<button onClick={() => setPassword()}>password</button></span>
                            :
                            null
                    }

                </div>
            </section>
        </main>
    );
}

export default Auth;
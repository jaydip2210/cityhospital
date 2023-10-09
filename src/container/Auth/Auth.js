import React, { useState } from 'react';
import Button from '../../components/Ui/Button/Button';
import Input from '../../components/Ui/Inputbox/Input';
import { Heading } from '../../components/Ui/Heading/Heading';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Auth(props) {
    const [type, setType] = useState('login');

    let authObj, initVal;

    if (type === 'login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required()
        }
        initVal = {
            email: '',
            password: '',
        }
    } else if (type === 'signUp') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            con_password: yup.string().required().test("con_password", "Not same password", function(val) {
                if(val === this.parent.password) {
                    return true;
                } else {
                    return false;
                }
            })
        }
        initVal = {
            name: '',
            email: '',
            password: '',
            con_password: ''
        }
    } else {
        authObj = {
            email: yup.string().email().required(),
        }
        initVal = {
            email: '',
        }
    }

    let authSchema = yup.object().shape(authObj);

    const formikobj = useFormik({
        initialValues: initVal,
        onSubmit: values => {
            console.log(values);
        },
        enableReinitialize: true,
        validationSchema: authSchema
    });

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } = formikobj;

    console.log(errors);

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
                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signUp' ? <div className="col-md-8 form-group">
                                    <Input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        value={values.name}
                                        onchange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.name && touched.name ? errors.name : ''} />
                                    {/* {errors.name && touched.name ? <span>{errors.name}</span> : null} */}
                                </div> : null
                            }
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                    value={values.email}
                                    onchange={handleChange}
                                    onBlur={handleBlur} 
                                    errorText={errors.email && touched.email ? errors.email : ''} />
                                {/* {errors.email && touched.email ? <span>{errors.email}</span> : null} */}
                            </div>

                            {
                                type === 'login' || type === 'signUp' ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <Input type="tel" className="form-control" name="password" id="password" placeholder="Your password"
                                        value={values.password}
                                        onchange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.password && touched.password ? errors.password : ''} />
                                    {/* {errors.password && touched.password ? <span>{errors.password}</span> : null} */}
                                </div> : null
                            }

                            {
                                type === 'signUp' ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <Input type="tel" className="form-control" name="con_password" id="con_password" placeholder="Your confirm password"
                                        value={values.con_password}
                                        onchange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.con_password && touched.con_password ? errors.con_password : ''} />
                                    {/* {errors.con_password && touched.con_password ? <span>{errors.con_password}</span> : null} */}
                                </div> : null
                            }

                        </div>
                        <div className="text-center">
                            {/* {
                                type === 'login' ? <Button type="submit" disabled={true}>Login</Button> :
                                    type === 'signUp' ? <Button btnDisabled={true} btnType="Secondary" type="submit">SignUp</Button> :
                                        <Button btnType="Outline" type="submit">submit</Button>
                            } */}

                            {
                                type === 'login' ? <Button type="submit">Login</Button> :
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
                </div>
            </section>
        </main>
    );
}

export default Auth;
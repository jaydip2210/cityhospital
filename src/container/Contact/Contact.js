import React from 'react';
import { ContactHeading, Heading } from '../../components/Ui/Heading/Heading';
import { CText1 } from '../../components/Ui/Text/Text';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function Contact(props) {
    let contactSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^([a-zA-Z ]){2,30}$/, "Please enter valid name"),
        email: yup.string().email("Plase enter valid email").required("please enter email"),
        subject: yup.string().required("Please enter subject").max(30, "Please enter valid subject"),
        message: yup.string().required("Please enter message").min(2, "Minimum 30 character valid").max(100, "Maximum 100 character Allowed")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: contactSchema
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikobj;


    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading>Contact</Heading>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <ContactHeading>Location:</ContactHeading>
                                <CText1> F-505, Inovative Plazza New Delhi, India</CText1>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <ContactHeading>Email:</ContactHeading>
                                <CText1>cityhospital@example.com</CText1>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <ContactHeading>Call:</ContactHeading>
                                <CText1>+91 9988776655</CText1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form onSubmit={handleSubmit} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        values={values.name}
                                    />
                                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        values={values.email}
                                    />
                                    {errors.email && touched.email ? <span>{errors.email}</span> : null}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    values={values.subject}
                                />
                                {errors.subject && touched.subject ? <span>{errors.subject}</span> : null}
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    values={values.message}
                                />
                                {errors.message && touched.message ? <span>{errors.message}</span> : null}
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default Contact;
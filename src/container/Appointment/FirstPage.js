import * as React from 'react';

import { Heading } from '../../components/Ui/Heading/Heading';
import Button from '../../components/Ui/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';

export default function FirstPage() {

    let AppointmentSchema = yup.object().shape({
        name: yup.string().required("Please enter name").matches(/^[a-zA-Z]{2,30}$/, "Please enter valid name"),
        email: yup.string().email("Plase enter valid email").required("please enter email"),
    })

     const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);

            let array = values.message.split(" ");
            console.log(array);

            let newArray = array.map((v) =>
                v[0].toUpperCase() + v.substring(1)
            )
            console.log(newArray);

            console.log(newArray.join(" "));
        },
        validationSchema: AppointmentSchema
    })
    console.log(AppointmentSchema);

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikObj;

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <form role="form" className="php-email-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} />
                                {errors.name && touched.name ? <span>{errors.name}</span> : null}
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
                                {errors.email && touched.email ? <span>{errors.email}</span> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}
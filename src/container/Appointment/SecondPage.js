import * as React from 'react';

import { Heading } from '../../components/Ui/Heading/Heading';
import Button from '../../components/Ui/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';

export default function SecondPage() {

    let d = new Date()
    let nd = new Date()
    nd.setDate(d.getDate() - 1)
    console.log(nd);

    let AppointmentSchema = yup.object().shape({
        phone: yup.string().required("Please enter phone number").matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please enter valid phone number").typeError("Only digit number Allowed"),
        date: yup.date().min(nd, "Please select valid date").required("Please select date"),
    })


     const formikObj = useFormik({
        initialValues: {
            phone: '',
            date: '',
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
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone} />
                                {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
                            </div>
                            <div className="col-md-4 form-group mt-3-md-0">
                                <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date} />
                                {errors.date && touched.date ? <span>{errors.date}</span> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}
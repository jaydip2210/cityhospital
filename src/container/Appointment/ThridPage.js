import * as React from 'react';

import { Heading } from '../../components/Ui/Heading/Heading';
import Button from '../../components/Ui/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';

export default function SecondPage() {

    let AppointmentSchema = yup.object().shape({
        file: yup.mixed().required("Please enter file")
            .test("file", "More than 2mb and jpg file Allowed", function (v) {
                console.log(v);

                if (v <= 2000 && v === "jpg") {
                    return true;
                } else {
                    return false;
                }
            })
    })


     const formikObj = useFormik({
        initialValues: {
            file: ''
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
                        <div className="col-md-4 form-group mt-3">
                                <input type="file" name="file" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.file} />
                                {errors.file && touched.file ? <span>{errors.file}</span> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}
import React from 'react';
import { Heading } from '../../components/Ui/Heading/Heading';
import Button from '../../components/Ui/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';

import MultiStepForm from '../../container/Appointment/MultiStepForm'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Appointment(props) {

    // let d = new Date()
    // let nd = new Date()
    // nd.setDate(d.getDate() - 1)
    // console.log(nd);

    // let AppointmentSchema = yup.object().shape({
    //     name: yup.string().required("Please enter name").matches(/^[a-zA-Z]{2,30}$/, "Please enter valid name"),
    //     email: yup.string().email("Plase enter valid email").required("please enter email"),
    //     phone: yup.string().required("Please enter phone number").matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please enter valid phone number").typeError("Only digit number Allowed"),
    //     date: yup.date().min(nd, "Please select valid date").required("Please select date"),
    //     department: yup.string().required("Please select any one option"),
    //     message: yup.string().required("Please enter message").matches(/(\s\s\s*)/, "Please extra space remove")
    //         // .min(30, "Minimum 30 character valid")
    //         // .max(100, "Maximum 100 charecter Allowed")
    //         .test("message", "More than 5 word Allowed", function (value) {
    //             // let arr = value.split(" ")

    //             if (value.length <= 5) {
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         }),

    //     file: yup.mixed().required("Please enter file")
    //         .test("file", "More than 2mb and jpg file Allowed", function (v) {
    //             console.log(v);

    //             if (v <= 2000 && v === "jpg") {
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         })
    // })

    // const formikObj = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         date: '',
    //         department: '',
    //         message: '',
    //         file: ''
    //     },
    //     onSubmit: values => {
    //         console.log(values);

    //         let array = values.message.split(" ");
    //         console.log(array);

    //         let newArray = array.map((v) =>
    //             v[0].toUpperCase() + v.substring(1)
    //         )
    //         console.log(newArray);

    //         console.log(newArray.join(" "));
    //     },
    //     validationSchema: AppointmentSchema
    // })
    // console.log(AppointmentSchema);

    // const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikObj;


    return (
        // <div>
        //     <section id="appointment" className="appointment">
        //         <div className="container">
        //             <div className="section-title">
        //                 <Heading>Make an Appointment</Heading>
        //                 <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
        //                     blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
        //                     Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        //             </div>
        //             <form role="form" className="php-email-form" onSubmit={handleSubmit}>
        //                 <div className="row">
        //                     <div className="col-md-4 form-group">
        //                         {/*Name: */}
        //                         <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.name} />
        //                         {errors.name && touched.name ? <span>{errors.name}</span> : null}
        //                     </div>
        //                     <div className="col-md-4 form-group mt-3 mt-md-0">
        //                         <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.email} />
        //                         {errors.email && touched.email ? <span>{errors.email}</span> : null}
        //                     </div>
        //                     <div className="col-md-4 form-group mt-3 mt-md-0">
        //                         <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone"
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.phone} />
        //                         {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div className="col-md-4 form-group mt-3">
        //                         <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.date} />
        //                         {errors.date && touched.date ? <span>{errors.date}</span> : null}
        //                     </div>
        //                     <div className="col-md-4 form-group mt-3">
        //                         <select name="department" id="department" className="form-select"
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.department} >
        //                             <option value>Select Department</option>
        //                             <option value="Department 1">Department 1</option>
        //                             <option value="Department 2">Department 2</option>
        //                             <option value="Department 3">Department 3</option>
        //                         </select>
        //                         {errors.department && touched.department ? <span>{errors.department}</span> : null}
        //                     </div>
        //                     <div className="col-md-4 form-group mt-3">
        //                         <input type="file" name="file" 
        //                             onChange={handleChange}
        //                             onBlur={handleBlur}
        //                             value={values.file} />
        //                         {errors.file && touched.file ? <span>{errors.file}</span> : null}
        //                     </div>
        //                 </div>
        //                 <div className="form-group mt-3">
        //                     <textarea className="form-control" name="message" rows={5} placeholder="Message"
        //                         onChange={handleChange}
        //                         onBlur={handleBlur}
        //                         value={values.message} />
        //                     {errors.message && touched.message ? <span>{errors.message}</span> : null}
        //                 </div>
        //                 <div className="mb-3">
        //                     <div className="loading">Loading</div>
        //                     <div className="error-message" />
        //                     <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        //                 </div>
        //                 <div className="text-center"><Button type="submit">Make an Appointment</Button></div>
        //             </form>
        //         </div>
        //     </section>
        // </div>

        <div>
            <br></br>
            <Container width="800">
                <Box sx={{ bgcolor: '#cfe8fc' }}>
                <MultiStepForm />
                </Box>
            </Container>
           
        </div>
    );
}

export default Appointment;
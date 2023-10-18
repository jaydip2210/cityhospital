import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

function DepartmentForm({onHandleSubmit, onupdte}) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        if(onupdte){
            handleClickOpen();
            setValues(onupdte)
        }
    },[onupdte])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var d = new Date();
    let nd = Date(d.setDate(d.getDate() - 1))

    let departmentSchema = yup.object().shape({
        name: yup.string().required("please enter name"),
        shortmsg: yup.string().required("please enter msg").max(30, "Maximum 100 charecter Allowed"),
        longmsg: yup.string().required("please enter msg").min(50, "Minimum 30 character valid").max(100, "Maximum 100 charecter Allowed"),
                
    })

    const formikobj = useFormik({

        initialValues: {
            name: '',
            shortmsg: '',
            longmsg: '',
        },

        validationSchema: departmentSchema,
        onSubmit: (values, action) => {
            console.log(values);
            onHandleSubmit(values)

            // if (updte) {
            //     // handleUpdate(values);
            // } else {
            //     Tabledata(values)
            // }

            action.resetForm();
            handleClose();
        },

    })

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, setValues } = formikobj;
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField

                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                    <TextField

                        margin="dense"
                        id="shortmsg"
                        name="shortmsg"
                        label="shortmsg"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.shortmsg}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.shortmsg && touched.shortmsg ? <span>{errors.shortmsg}</span> : null}
                    <TextField

                        margin="dense"
                        id="longmsg"
                        name="longmsg"
                        label="longmsg"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.longmsg}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.longmsg && touched.longmsg ? <span>{errors.longmsg}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DepartmentForm;
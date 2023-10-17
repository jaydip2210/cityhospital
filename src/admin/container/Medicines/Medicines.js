import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import MedicineFrom from './MedicineFrom';
import { useFormik } from 'formik';

function Medicines(props) {
    // const [mData, setMData] = useState([]);
    // const [updte, setUpdate] = useState(false);

    // useEffect(() => {
    //     let localData = JSON.parse(localStorage.getItem("medicines"));
    //     if (localData) {
    //         setMData(localData);
    //     }
    // }, [])

    // const handleFormSubmit = (data) => {
    //     let localData = JSON.parse(localStorage.getItem("medicines"));
    //     // console.log(localData);
    //     let id = Math.floor(Math.random() * 1000)
    //     if (localData) {
    //         if (updte) {
    //             let localData = JSON.parse(localStorage.getItem("medicines"));

    //             let index = localData.findIndex((v) => v.id == data.id)
    //             console.log(index);

    //             localData[index] = data;

    //             localStorage.setItem("medicines", JSON.stringify(localData))
    //             setMData(localData)

    //             setUpdate(false)
    //         } else {
    //             localData.push({ id: id, ...data });
    //             localStorage.setItem("medicines", JSON.stringify(localData))
    //             setMData(localData)
    //             // console.log(localData);
    //         }

    //     } else {
    //         localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]))
    //         setMData([{ id, ...data }])
    //     }
    // }

    // const handleUpdate = (data) => {
    //     console.log(data);

    // }

    // const Tabledata = (data) => {
    //     console.log('rhfrfhrfr');
    //     console.log(data);

    // }
    // // Tabledata()

    // const handleEdit = (data) => {
    //     // console.log(data);
    //     // handleClickOpen();
    //     // setValues(data)
    //     // setMData(data)
    //     setUpdate(data)
    // }

    // const handleDelete = (id) => {
    //     // console.log(id);
    //     let localData = JSON.parse(localStorage.getItem("medicines"));

    //     let fData = localData.filter((v) => v.id !== id)

    //     localStorage.setItem("medicines", JSON.stringify(fData))
    //     setMData(fData)

    // }

    // const columns = [
    //     { field: 'name', headerName: 'Name', width: 70 },
    //     { field: 'price', headerName: 'Price', width: 130 },
    //     { field: 'date', headerName: 'date', width: 130 },
    //     {
    //         field: 'Action', headerName: 'Action',

    //         renderCell: (params) => (
    //             <>
    //                 <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
    //                     <EditIcon />
    //                 </IconButton>

    //                 <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
    //                     <DeleteIcon />
    //                 </IconButton>
    //             </>
    //         )

    //     },

    // ];


    const [open, setopen] = React.useState(false);

    const handleClickOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    const handleAdd = (data) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let rno = Math.floor(Math.random() * 10000);

        let newData = { id: rno, ...data }

        if (localData === null) {
            localStorage.setItem("medicines", JSON.stringify([newData]));
        } else {
            localData.push(newData);
            localStorage.setItem("medicines", JSON.stringify(localData));
        }
        handleClose();
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            date: ''
        },
        validationSchema: medicinesSchema,
        onsubmit: (values, action) => {
            action.resetForm();
            handleAdd(values);
        }
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;
    console.log(errors);
    return (
        <div>
            {/* <MedicineFrom onHandleSubmit={handleFormSubmit} onupdte={updte} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={mData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div> */}

            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
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
                        id="price"
                        name="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}
                    <TextField

                        margin="dense"
                        id="date"
                        name="date"
                        label="date"
                        type="date"
                        fullWidth
                        variant="standard"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.date && touched.date ? <span>{errors.date}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Medicines;
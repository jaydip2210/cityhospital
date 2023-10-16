import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import MedicineFrom from './MedicineFrom';
import { getMedicines } from '../../../redux/action/medicines.action';
import { useDispatch, useSelector } from 'react-redux';

function Medicines(props) {
    const [mData, setMData] = useState([]);
    const [updte, setUpdate] = useState(false);

    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    useEffect(() => {
        // let localData = JSON.parse(localStorage.getItem("medicines"));
        // if (localData) {
        //     setMData(localData);
        // }
        dispatch(getMedicines())
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        // console.log(localData);
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            if (updte) {
                let localData = JSON.parse(localStorage.getItem("medicines"));

                let index = localData.findIndex((v) => v.id == data.id)
                console.log(index);

                localData[index] = data;

                localStorage.setItem("medicines", JSON.stringify(localData))
                setMData(localData)

                setUpdate(false)
            } else {
                localData.push({ id: id, ...data });
                localStorage.setItem("medicines", JSON.stringify(localData))
                setMData(localData)
                // console.log(localData);
            }

        } else {
            localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }

    const handleUpdate = (data) => {
        console.log(data);

    }

    const Tabledata = (data) => {
        console.log('rhfrfhrfr');
        console.log(data);

    }
    // Tabledata()

    const handleEdit = (data) => {
        // console.log(data);
        // handleClickOpen();
        // setValues(data)
        // setMData(data)
        setUpdate(data)
    }

    const handleDelete = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fData = localData.filter((v) => v.id !== id)

        localStorage.setItem("medicines", JSON.stringify(fData))
        setMData(fData)

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        {
            field: 'Action', headerName: 'Action',

            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )

        },

    ];

    return (
        <div>
            <MedicineFrom onHandleSubmit={handleFormSubmit} onupdte={updte}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medicines.medicines}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Medicines;
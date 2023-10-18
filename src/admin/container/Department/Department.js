import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentForm from './DepartmentForm';
import { addDepartment, deleteDepartment, getDepartment, updateDepartment } from '../../../redux/action/department.action';

function Department(props) {
    const [mData, setMData] = useState([]);
    const [updte, setUpdate] = useState(false);

    const dispatch = useDispatch();
    const department = useSelector(state => state.department)
    console.log(department);

    useEffect(() => {
        dispatch(getDepartment())
    }, [])

    const handleFormSubmit = (data) => {
        // dispatch(addDepartment(data)); //add

        if (updte) {
            dispatch(updateDepartment(data));
        } else {
            dispatch(addDepartment(data));
        }
    }

    const handleUpdate = (data) => {
        console.log(data);

    }

    const Tabledata = (data) => {
        console.log('rhfrfhrfr');
        console.log(data);
    }

    const handleEdit = (data) => {
        setUpdate(data)
    }

    const handleDelete = (id) => {
        dispatch(deleteDepartment(id));
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'ShortMsg', width: 130 },
        { field: 'date', headerName: 'LongMsg', width: 130 },
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
            <DepartmentForm onHandleSubmit={handleFormSubmit} onupdte={updte}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={department.department}
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

export default Department;
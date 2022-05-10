import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, deleteUsers, editUser,loadPostStart } from '../redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InplaceTable from './InplaceTable';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Home() {

  let dispatch = useDispatch();
  const { users } = useSelector(state => state.user_data);

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPostStart())
  }, []);

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete')) {
      dispatch(deleteUsers(id));
    }
  };

  const [editInplace,setEditInplace] = useState();

  const handleEdit = (event,id) => {
    event.preventDefault();
    setEditInplace(id)
  }
  const getTableRows = (user) => {
    return(
        <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    {user.email}
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    {user.phone}
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    {user.address.street + '' + user.address.city}
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button onClick={(event) => handleEdit(event,user.id)}>Edit</Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>

    )
  }
  const [editedFields,setEditedFields] = useState({
      id: 0,
      name: "",
      email:"",
      contact: 0,
      address: ""
  })
  const getFormData = (event) => {
    event.preventDefault();
    const editedFormData = {
        id: editInplace,
        name: editedFields.name,
        email: editedFields.email,
        address: editedFields.address,
        contact: editedFields.contact,
      };
    dispatch(editUser(editedFormData,editInplace));
  }
  const handleInputChange = (event) => {
    event.preventDefault();
    let fieldName = event.target.getAttribute('name');
    let fieldValue = event.target.value;
    const editedFields_clone = {...editedFields};
    editedFields_clone[fieldName] = fieldValue;
    setEditedFields(editedFields_clone)
  }
  const formField = (
                    <form onSubmit={getFormData}>
                        <input type="text" name="name" placeholder="Enter Name" onChange={handleInputChange} />
                        <input type="text" name="email" placeholder="Enter email" onChange={handleInputChange}/>
                        <input type="text" name="contact" placeholder="Enter contact" onChange={handleInputChange}/>
                        <input type="text" name="address" placeholder="Enter address" onChange={handleInputChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    )
  return (
    <div>

        {!!editInplace && formField}

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 900, marginTop: 10 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map(user => getTableRows(user))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;

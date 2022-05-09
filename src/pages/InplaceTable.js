import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function InplaceTable(user,StyledTableCell,StyledTableRow) {

  return (
    <>
        {/* <StyledTableRow key={user.id}> */}
                  <StyledTableCell component="th" scope="row">
                    <TextField id="standard-basic" defaultValue={user.name}/>
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    <TextField id="standard-basic" defaultValue={user.email}/>
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    <TextField id="standard-basic" defaultValue={user.phone}/>
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    <TextField id="standard-basic" defaultValue={user.address.street + '' + user.address.city}/>
                  </StyledTableCell>
                  <StyledTableCell align="cetnter">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button >save</Button>
                      <Button
                        color="secondary"
                      >
                        cancel
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                {/* </StyledTableRow> */}
    </>
  )
}
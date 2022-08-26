import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'

const Locations = ['New York','Washington','Boston','Austin'];

const Input = ({changeLocation}) => {
 
  const handleChange = (event, newInputValue) => {
    console.log(newInputValue);
    changeLocation(newInputValue);
  }
  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={Locations}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="Location" />}
    onInputChange={handleChange}
  />
  )
}

export default Input
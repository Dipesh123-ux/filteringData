import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Dropdown = ({options,value,selectToggle,label}) => {

    const handleChange = (event) => {
      console.log(event.target.value)
        selectToggle(event.target.value);
      };


  return (
 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{label}</InputLabel>
  <Select
    value={value}
    label={label}
    onChange={handleChange}
  >
    {options.map(({label,id,value})=>(
        <MenuItem key={id} value={value}>{label}</MenuItem>
    ))}
  </Select>
</FormControl>
  )
}

export default Dropdown
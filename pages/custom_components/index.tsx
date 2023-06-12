import React from 'react'
import TextField from '../../components/textfield'
import {Button} from "@mui/material";
import Icons from "@mui/icons-material/AddAlert"

const CustomComponents = () => {
  return (
    <div>
        <TextField />
        <Button variant="contained" startIcon={<Icons/>}>Boton</Button>
    </div>
  )
}

export default CustomComponents

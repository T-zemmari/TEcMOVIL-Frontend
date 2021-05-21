import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
//import classes from '*.module.css';


const SelectInput = () => {

    const [value, setValue] = useState('')
    const handelIt = (event) => {

        setValue(event.target.value)
    }

    return (


        <div className="SelectInput">

            <FormControl className={classes.formControl}>

                <InputLabel>Porfavor Elija La Marca De Su Dispositivo</InputLabel>
                <Select labelID='selected' id='Moviles' value={value} onChange={handelIt}>


                    <MenuItem value='Alcatel' >Alcatel</MenuItem>
                    <MenuItem value='Samsung'>Samsung</MenuItem>
                    <MenuItem value='Xiaomi'>Xiaomi</MenuItem>
                    <MenuItem value='Iphone'>Iphone</MenuItem>
                    <MenuItem value='Lg'>Lg</MenuItem>
                    <MenuItem value='Sony'>Sony</MenuItem>
                    <MenuItem value='Nokia'>Nokia</MenuItem>

                </Select>
            </FormControl>
        </div>

    )
}

export default SelectInput;
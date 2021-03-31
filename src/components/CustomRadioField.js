import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const RadioInput = ({ className, variant, label, required, color, ...props }) => {
    return (
            <TextField
                className={className}
                label={label}
                variant={variant}
                color={color}
                {...props}
            />
    )
}

export default RadioInput
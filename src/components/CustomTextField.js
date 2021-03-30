  
import React from 'react'

import TextField from '@material-ui/core/TextField';

const FormInput = ({ className, variant, label, required, color, ...props }) => {
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

export default FormInput
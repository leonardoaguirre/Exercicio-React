import { TextField, Button, Stack, InputAdornment } from '@material-ui/core'
import { Send, DateRange } from '@material-ui/icons';
import { useState } from 'react';

const Input = (props) => {
    const [input, setInput] = useState(props.input)

    const onChangeValues = (key, value) => {
        if (key === "firstName" && value.length > 4) setInput({ ...input, required: false })
        if (key === "phoneNumber" && value.length > 11) setInput({ ...input, required: false })
    }

    return (
        <>
            {input.type !== "submit" ?
                <TextField
                    type={input.type}
                    label={input.label}
                    alt={input.key}
                    required={input.required}
                    error={input.required}
                    margin='normal'
                    key={props.i}
                    InputProps={input.type === "date" ? {
                        startAdornment: (
                            <InputAdornment position="start">
                                <DateRange />
                            </InputAdornment>
                        ),
                    } : {}}
                    helperText={input.required ? 'Este campo é obrigatório!' : ''}
                    onChange={input.required? (e) => onChangeValues(input.key, e.target.value) : function(){}}
                    fullWidth />
                :
                <Stack alignItems={'flex-end'}>
                    <Button
                        type={input.type}
                        key={props.i}
                        variant="contained"
                        alt={input.key}
                        endIcon={<Send />}
                        color="success">
                        {input.label}
                    </Button>
                </Stack>
            }
        </>
    )
}
export default Input
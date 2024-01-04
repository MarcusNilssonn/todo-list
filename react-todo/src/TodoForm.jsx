import ListItem from '@mui/material/ListItem';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Create } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText(""); //Reset the text to empty.
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{ //Icon
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    type='submit'
                                >
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}


{/* <OutlinedInput
    id="outlined-adornment-password"
    type={showPassword ? 'text' : 'password'}

    label="Password"
/> */}
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Modal, Box } from '@material-ui/core'
import Input from './components/Input';

const App = () => {
    const [inputs, setInputs] = useState([])
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)
    const onSubmit = (e) => setOpen(true)

    useEffect(() => {
        axios.get('http://localhost:3008/inputs')
            .then((res) => {
                setInputs(res.data)
            })
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className="App" >
            {inputs.length > 0 ?
                <form onSubmit={(e) => onSubmit(e.preventDefault())}>
                    <Typography align='center' variant='h2' >Form</Typography>
                    {
                        inputs.map((input, i) => <Input input={input} i={i} key={i} setInputs={setInputs}/>)
                    }
                </form>
                :
                <Typography align='center' variant='h1'>Erro ao consultar API</Typography>
            }
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Success!
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default App;
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3008
app.use(cors())

app.get('/inputs', (__req, res) => {
    const inputs = [{
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true
        },
        {
            key: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
            required: true
        },
        {
            key: 'birthDate',
            label: 'Birth Date',
            type: 'date',
            required: false
        },
        {
            key: 'sendButton',
            label: 'Submit Form',
            type: 'submit'
        }
    ]

    res.status(200).json(inputs)
})

app.listen(port, () => { console.log(`Server Running at port ${port}`); })
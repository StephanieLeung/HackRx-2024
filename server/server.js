const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

const User = require('./models/User');
const Appointment = require('./models/Appointment')
const mongoose = require("mongoose");


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/', (req, res) => {
    res.json({message: 'Hello!'});
});

app.post('/api/users/add', async (req, res) => {
    const {name, email, phone, dob, password, status} = req.body;
    console.log("Signup endpoint reached");
    try {
        console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            phoneNumber: phone,
            dateOfBirth: dob,
            password: hashedPassword,
            status});
        await newUser.save();
        res.status(201).json({message: 'User added successfully', user: newUser});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({message: 'Email already exists.'});
        } else {
            res.status(500).json({message: 'Internal server error', error: error});
            console.log(error);
        }
    }
});

app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Endpoint reached");
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({message: 'Invalid email or password'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password'});
        }
        res.status(200).json({
            message: 'Login successful',
            user: user,
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error});
    }
});

app.get('/api/users/appointments/:id', async (req, res) => {
    const userId = req.params.id;
    console.log("appointments reached.");
    try {
        const appointments = await Appointment.find({userId: userId});

        if (appointments.length === 0) {
            return res.status(401).json({message: 'No appointments found.'});
        }

        return res.status(200).json({message: 'Appointments found.', appointments: appointments});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Internal server error', error: err});
    }
});

app.listen(PORT, () => {
    console.log('Server running.');
});

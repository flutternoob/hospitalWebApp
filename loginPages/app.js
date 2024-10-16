const app = require('express')();
const mongoose = require('mongoose');
const fs = require('fs');
const express = require('express');
const Admin = require('./models/adminModel');
const Doctor = require('./models/doctorModel');
const Patient = require('./models/patientModel');

const dbURI = 'mongodb+srv://hospitaldata:test1234@hospitalapp.mz7ei.mongodb.net/?retryWrites=true&w=majority&appName=hospitalapp';

mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.get('/', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.status(200).send(admins); // Explicitly set status to 200 OK
    console.log('Admins:', admins);
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
});


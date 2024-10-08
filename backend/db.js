const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/hospitaldata';

const client = new MongoClient(url/* , { useUnifiedTopology: true } */);

async function connectDatabases() {
  try {
    await client.connect();
    console.log('Connected successfully to server');

    const dbAdmin = client.db('dbAdmin');
    const dbDoctor = client.db('dbDoctor');
    const dbPatient = client.db('dbPatient');

    // Example operation on dbAdmin
    const collectionAdmin = dbAdmin.collection('dbAdmin');
    const documentsAdmin = await collectionAdmin.find({}).toArray();
    console.log('Documents in dbAdmin, collectionAdmin:', documentsAdmin);

    // Example operation on dbDoctor
    const collectionDoctor = dbDoctor.collection('dbDoctor');
    const documentsDoctor = await collectionDoctor.find({}).toArray();
    console.log('Documents in dbdoctor, collectionDoctor:', documentsDoctor);

    // Example operation on dbPatient
    const collectionPatient = dbPatient.collection('dbPatient');
    const documentsPatient = await collectionPatient.find({}).toArray();
    console.log('Documents in dbPatient, collectionPatient:', documentsPatient);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  } /* finally {
    await client.close();
    console.log('Connection closed');
  } */
}

module.exports = connectDatabases();

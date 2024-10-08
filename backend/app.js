const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//const {connectToDb, getDb} = require("./db");

const {connectDatabases} = require("./db");

const { ObjectId } = require('mongodb');

//init app & middleware

const app = express();
app.use(express.json());

//db connection

connectDatabases;

//admin routes

app.get("/dbAdmin", (req, res) => {

    let dbAdmin = [];

    db.collection("dbAdmin")
        .find()
        .forEach(dbAdmin => dbAdmin.push(dbAdmin))
        .then(() => {
            res.status(200).json(dbAdmin);
        })
        .catch((err) => {
            res.status(500).json({error: "Could not fetch the documents"});
        });
});

app.post("/dbAdmin", (req, res) => {
    const dbAdmin = req.body;

    db.collection("dbAdmin")
        .insertOne(dbAdmin)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(500).json({err: "Could not create a new document"});
        });
});

app.delete("/dbAdmin/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)){
        db.collection("dbAdmin")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"});
        });
    } else {
        res.status(500).json({error: "Not a valid document id"});
    }
});

//patient routes

app.get("/dbPatient", (req, res) => {

    let dbPatient = [];

    db.collection("dbPatient")
        .find()
        .forEach(dbPatient => dbPatient.push(dbPatient))
        .then(() => {
            res.status(200).json(dbPatient);
        })
        .catch((err) => {
            res.status(500).json({error: "Could not fetch the documents"});
        });
});

app.post("/dbPatient", (req, res) => {
    const dbPatient = req.body;

    db.collection("dbPatient")
        .insertOne(dbPatient)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(500).json({err: "Could not create a new document"});
        });
});

app.delete("/dbPatient/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)){
        db.collection("dbPatient")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"});
        });
    } else {
        res.status(500).json({error: "Not a valid document id"});
    }
});

//patient routes

app.get("/dbPatient", (req, res) => {

    let dbPatient = [];

    db.collection("dbPatient")
        .find()
        .forEach(dbPatient => dbPatient.push(dbPatient))
        .then(() => {
            res.status(200).json(dbPatient);
        })
        .catch((err) => {
            res.status(500).json({error: "Could not fetch the documents"});
        });
});

app.post("/dbPatient", (req, res) => {
    const dbPatient = req.body;

    db.collection("dbPatient")
        .insertOne(dbPatient)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(500).json({err: "Could not create a new document"});
        });
});

app.delete("/dbPatient/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)){
        db.collection("dbPatient")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"});
        });
    } else {
        res.status(500).json({error: "Not a valid document id"});
    }
});

app.patch("/dbPatient/:id", (req, res) => {
    const updates = req.body;

    if (ObjectId.isValid(req.params.id)){
        db.collection("dbPatient")
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"});
        });
    } else {
        res.status(500).json({error: "Not a valid document id"});
    }
});
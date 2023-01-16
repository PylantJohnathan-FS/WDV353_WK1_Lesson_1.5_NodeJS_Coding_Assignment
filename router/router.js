const express = require("express");
const router = express.Router();

// GET on http://localhost:3000/assignment/
router.get("/", (req,res, next)=>{
    res.status(200).json({
        message: 'Successful - Get',
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// Get by ID on http://localhost:3000/assignment/
router.get("/get/:id", (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
        message:'Successful - Get by ID',
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// Post by ID on http://localhost:3000/assignment/
router.post("/post", (req,res,next)=>{
    res.status(200).json({
        message: 'Successful - Post',
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// Patch by ID on http://localhost:3000/assignment/
router.patch("/patch/:id", (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
        message:'Successful - Patch by ID',
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// Delete by ID on http://localhost:3000/assignment/
router.delete("/delete/:id", (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
        message:'Successful - Delete by ID',
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;
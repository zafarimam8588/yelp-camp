const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const {
    index,
    renderForm,
    createCampground,
    showCampground,
    renderEditForm,
    updateCampground,
    deleteCampground
} = require("../controllers/campgrounds")
const {isLoggedin,isAuthor,validateCampground} = require("../middleware");
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });


// isLoggedin, upload.array('image'), validateCampground,catchAsync(createCampground)

router.get("/", catchAsync(index))

router.get("/new",isLoggedin,renderForm)

router.post("/",  (req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.send("worked")
})

router.get("/:id",catchAsync(showCampground))


router.get('/:id/edit',isLoggedin,isAuthor, catchAsync(renderEditForm))

router.put('/:id',isLoggedin, isAuthor, upload.array('image'), validateCampground,  catchAsync(updateCampground));

router.delete('/:id',isLoggedin, isAuthor,catchAsync(deleteCampground));

module.exports = router;
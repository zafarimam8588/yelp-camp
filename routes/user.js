const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const {storeReturnTo} = require("../middleware");
const {
    renderRegister,
    register,
    renderLogin,
    login,
    logout
} = require("../controllers/user")

router.get("/register",renderRegister)

router.post("/register",catchAsync(register))


router.get("/login", renderLogin)

router.post("/login",storeReturnTo, passport.authenticate("local",{failureFlash:true, failureRedirect:"/login"}), login)

router.get("/logout",logout)

module.exports = router;
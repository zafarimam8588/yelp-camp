const express = require("express");
const router = express.Router({mergeParams:true});
const catchAsync = require("../utils/catchAsync");
const {createReview,deleteReview} = require("../controllers/reviews")
const {isLoggedin,isReviewAuthor,validateReview} = require("../middleware")





router.post("/",validateReview,isLoggedin, catchAsync(createReview));

router.delete("/:reviewId",isLoggedin,isReviewAuthor, catchAsync(deleteReview));

module.exports = router;

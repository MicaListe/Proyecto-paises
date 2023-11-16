const { Router } = require("express");
const allCountries= require("../controllers/allCountries")
const getId= require("../controllers/id")
const allActivities= require("../controllers/allActivities")
const name = require("../controllers/name")
const createActivity= require("../controllers/createActivity")

const router = Router();

router.get("/countries",allCountries)
router.get("/countries/:id", getId)
router.get("/countries-name", name)
router.get("/activities-activity",allActivities)
router.post("/activities",createActivity)

module.exports = router;

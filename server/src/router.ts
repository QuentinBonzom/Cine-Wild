import express from "express";

const router = express.Router();

import sayActions from "./modules/say/sayAction";

router.get("/", sayActions.sayWelcome);

import browse from "./modules/program/programActions"

router.get("/api/programs", browse.browse );

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;

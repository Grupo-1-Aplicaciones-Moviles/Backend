import {Router} from "express";
import AgencyController from "../controllers/AgencyController.js";

const router = Router();
const agencyController = new AgencyController();

router.get("/", async (req, res) => {
    await agencyController.getAllAgencies(req, res);
});

router.get("/:id/services", async (req, res) => {
    await agencyController.getServicesByAgencyId(req, res);
});

router.get("/:id/reviews", async(req, res) => {
    await agencyController.getReviewsByAgencyId(req, res);
});

export default router;
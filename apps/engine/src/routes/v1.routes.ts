import { Router } from "express";

export const v1Routes = Router();

v1Routes.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        version: "v1"
    });
});

import express  from "express";
import { v1Routes } from "./routes/v1.routes";

export function createApp(){
    const app = express();
    app.use(express.json());

    app.use("/api/v1", v1Routes);

    return app;
}
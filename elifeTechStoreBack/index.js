import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

const port = process.env.APP_PORT;
app.listen(port, () => {});

export { app };
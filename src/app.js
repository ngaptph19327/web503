import mongoose from "mongoose";
import express from "express";
import router from "./routers/product";

const app = express();
app.use(express.json())
app.use('/api', router)

mongoose.connect('mongodb://127.0.0.1:27017/demo-node3')

export const viteNodeApp = app;
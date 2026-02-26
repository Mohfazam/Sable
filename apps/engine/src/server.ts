import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        "msg": "Root Endpoint"
    });
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

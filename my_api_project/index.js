const express = require("express")
const axios   = require("axios")
const app     = express()

app.get("/external-data", async (req, res) => {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=3&page=1&order=RANDOM")
        res.json(response.data);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

app.get("/get-breeds", async (req, res) => {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/breeds")
        res.json(response.data);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

app.get("/get-categories", async (req, res) => {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/categories")
        res.json(response.data);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
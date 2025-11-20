import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/jogo-live", async (req, res) => {
    try {
        const response = await axios.get("https://apibet1.vercel.app/api/jogo/live");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar API" });
    }
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

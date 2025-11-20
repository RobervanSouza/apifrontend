// /api/jogo-live.js
import axios from "axios";

export default async function handler(req, res) {
    try {
        const response = await axios.get("https://apibet1.vercel.app/api/jogo/live");
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar API" });
    }
}

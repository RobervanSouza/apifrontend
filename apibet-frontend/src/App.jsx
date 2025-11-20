import React, { useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import GameDetails from "./components/GameDetails";
import axios from "axios";

const App = () => {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        // Chama a função serverless
        const res = await axios.get("/api/jogo-live");
        setJogos(res.data.jogos || []);
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar jogos ao vivo.");
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

  if (loading) return <p>Carregando jogos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (jogos.length === 0) return <p>Não há jogos disponíveis no momento.</p>;

  return (
    <div style={{ padding: "16px" }}>
      <h1>Jogos ao Vivo</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {jogos.map((game) => (
          <GameCard key={game.id} game={game} onClick={setSelectedGame} />
        ))}
      </div>

      {selectedGame && (
        <div style={{ marginTop: "32px" }}>
          <h2>Detalhes do Jogo</h2>
          <GameDetails game={selectedGame} />
        </div>
      )}
    </div>
  );
};

export default App;

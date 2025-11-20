// src/App.jsx
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
        const res = await axios.get("http://localhost:3001/jogo-live");
        if (res.data.ok && res.data.total > 0) {
          setJogos(res.data.jogos);
        } else {
          setJogos([]);
        }
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar jogos ao vivo.");
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

  if (loading)
    return (
      <div style={styles.container}>
        <p>Carregando jogos...</p>
      </div>
    );

  if (error)
    return (
      <div style={styles.container}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  return (
    <div style={styles.container}>
      <h1>Jogos ao Vivo</h1>

      {jogos.length === 0 ? (
        <p>Não há jogos disponíveis no momento.</p>
      ) : (
        <div style={styles.cardsContainer}>
          {jogos.map((game) => (
            <GameCard
              key={game.id}
              game={{
                id: game.id,
                homeTeam: game.timeA,
                awayTeam: game.timeB,
                homeScore: game.placarA,
                awayScore: game.placarB,
                status: game.status,
                corners: game.estatisticas?.corners || 0,
                possession: game.estatisticas?.posse?.timeA || 0,
                shots: game.estatisticas?.chutes || {},
                passes: game.estatisticas?.passes || {},
                cards: game.estatisticas?.cartoes || {},
                saves: game.estatisticas?.saves || 0,
                substitutions: game.estatisticas?.substituicoes || [],
                odds: game.odds || {},
                lineups: game.lineups || {},
                events: game.events || [],
              }}
              onClick={setSelectedGame}
            />
          ))}
        </div>
      )}

      {selectedGame && (
        <div style={{ marginTop: "32px" }}>
          <h2>Detalhes do Jogo</h2>
          <GameDetails game={selectedGame} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertical center
    alignItems: "center", // horizontal center
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center", // centraliza os cards
    marginTop: "20px",
  },
};

export default App;

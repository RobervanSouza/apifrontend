// src/components/GameDetails.jsx
import React from "react";

const GameDetails = ({ game }) => {
  if (!game)
    return (
      <p style={{ padding: "16px" }}>Selecione um jogo para ver os detalhes.</p>
    );

  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #000",
        marginTop: "16px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}>
      <h2>
        {game.homeTeam} vs {game.awayTeam}
      </h2>
      <p>Status: {game.status}</p>
      <p>
        Score: {game.homeScore} - {game.awayScore}
      </p>

      <h3>Estatísticas</h3>
      <ul>
        <li>Corners: {game.corners}</li>
        <li>Posse: {game.possession}%</li>
        <li>Shots: {JSON.stringify(game.shots)}</li>
        <li>Passes: {JSON.stringify(game.passes)}</li>
        <li>Cartões: {JSON.stringify(game.cards)}</li>
        <li>Saves: {game.saves}</li>
        <li>Substituições: {JSON.stringify(game.substitutions)}</li>
        <li>Odds: {JSON.stringify(game.odds)}</li>
      </ul>

      <h3>Lineups</h3>
      <pre>{JSON.stringify(game.lineups, null, 2)}</pre>

      <h3>Eventos</h3>
      <pre>{JSON.stringify(game.events, null, 2)}</pre>
    </div>
  );
};

export default GameDetails;

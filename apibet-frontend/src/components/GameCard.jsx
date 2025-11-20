// src/components/GameCard.jsx
import React from "react";

const GameCard = ({ game, onClick }) => {
  return (
    <div
      onClick={() => onClick(game)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        cursor: "pointer",
        width: "250px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}>
      <h3>
        {game.homeTeam} vs {game.awayTeam}
      </h3>
      <p>Status: {game.status}</p>
      <p>
        Score: {game.homeScore} - {game.awayScore}
      </p>
    </div>
  );
};

export default GameCard;

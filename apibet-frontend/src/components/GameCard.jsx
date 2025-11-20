import React from "react";

const GameCard = ({ game, onClick }) => {
  return (
    <div
      onClick={() => onClick(game)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "12px",
        cursor: "pointer",
        width: "280px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <h3>
        {game.homeTeam} vs {game.awayTeam}
      </h3>
      <p>Status: {game.status || "Não disponível"}</p>
      <p>
        Score: {game.homeScore ?? 0} - {game.awayScore ?? 0}
      </p>
    </div>
  );
};

export default GameCard;

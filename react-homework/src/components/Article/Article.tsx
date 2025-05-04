import React from "react";
import "./Card.styles.css";

export const Card: React.FC = () => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7qJ3Zs1RzzOTQ-ayvL38mNy4sewFDbwOFlJslSzELB3ISCPkAOJmcRisaI0_PJ0BFf5X7ghyE_hA1mjL-P7pldw"
        alt="Default Image"
        className="card-image"
      />
      <div className="card-content">
        <h3>Default Title</h3>
        <p>This is a default description for the card.</p>
        <span>2024-08-10</span>
      </div>
    </div>
  );
};

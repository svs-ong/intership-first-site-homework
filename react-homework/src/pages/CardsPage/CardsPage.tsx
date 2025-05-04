import React from "react";
import { Card } from "../../components/Card/Card";
import "./CardsPage.styles.css";

export const CardsPage: React.FC = () => {
  return (
    <div className="cards-page">
      <Card />
      <Card />
    </div>
  );
};

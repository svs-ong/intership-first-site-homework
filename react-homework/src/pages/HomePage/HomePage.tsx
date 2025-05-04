import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={() => navigate("/page2")}>Go to Page 2</button>
      <button onClick={() => navigate("/cards")}>Go to Cards Page</button>
    </div>
  );
};

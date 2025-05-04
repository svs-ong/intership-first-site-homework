import React from "react";
import { useNavigate } from "react-router-dom";

export const BlogpostPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Blogpost Page</h1>
      <button onClick={() => navigate("/page1")}>Go to Page 1</button>
      <button onClick={() => navigate("/cards")}>Go to Cards Page</button>
    </div>
  );
};

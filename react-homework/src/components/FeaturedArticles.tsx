import React, { useState } from "react";
import { Article } from "./Article";

interface FeaturedArticlesProps {
  date: string;
}

const MockData = [ // Replace this with fetch_articles if needed
  {
    title: "How to build a React APP",
    description: "Blah Blah Blah Blah Blah Blah",
    date: "2020",
  },
  {
    title: "Understanding React Hooks",
    description: "Blah Blah Blah Blah Blah Blah",
    date: "2020",
  },
  {
    title: "React and TypeScript",
    description: "Blah Blah Blah Blah Blah Blah",
    date: "2021",
  },
  {
    title: "Advanced React Patterns",
    description: "Blah Blah Blah Blah Blah Blah",
    date: "2021",
  },
  {
    title: "How to pet cats",
    description: "Blah Blah Blah Blah Blah Blah",
    date: "2021",
  },
];



export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ date }) => {  //takes the date as a prop
  const [selectedDate, setSelectedDate] = useState<string>(date); //selectedDate holds the current date selected by the use

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {  //updates the selected date
    setSelectedDate(event.target.id); 
  };

  // Filter the articles based on the selected date
  const filteredArticles = MockData.filter(article => article.date === selectedDate);

  return (
    <div className="FeaturedArticles">
      <h2>Featured Articles</h2>
      <div className="yearBox">
        <div>
          <h4>Date</h4>
        </div>
        <div className="radio-item">
          <label htmlFor="2020">2020</label>
          <input
            type="radio"
            className="radio"
            name="Year"
            id="2020"
            checked={selectedDate === "2020"}
            onChange={handleDateChange}  //changes the selected date to 2020
          />
        </div>
        <div className="radio-item">
          <label htmlFor="2021">2021</label>
          <input
            type="radio"
            className="radio"
            name="Year"
            id="2021"
            checked={selectedDate === "2021"}
            onChange={handleDateChange}   //changes the selected date to 2021
          />
        </div>
      </div>

      <div className="articles-list">
        {filteredArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

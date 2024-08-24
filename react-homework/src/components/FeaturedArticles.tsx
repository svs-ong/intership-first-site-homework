import React, 
{ 
  useState, 
  useEffect 
}
from "react";
import { Article } from "./Article";
import HomeImg from '../img/home.svg'; // Default image
import '../styles/FeaturedArticles.styles.css';

interface FeaturedArticlesProps {
  date: string;
}

interface ArticleProps {
  title: string;
  description: string;
  date: string;
  imageurl?: string; 
  author?: string; 
  rating?: string; 
  readingTime?: string; 
}

export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ date }) => {

  const [selectedDate, setSelectedDate] = useState<string>(date);
  const [articlesList, setArticlesList] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const fetch_articles = async () => {

    console.log("Fetching articles...");

    try {

      const response = await fetch('http://localhost:3000/articles');
      const result = await response.json();

      console.log("Data fetched successfully");

      setArticlesList(result ||  []);
      setLoading(false);

    } catch (error) {

      setLoading(false);
      setError(error);

    }
  }

  useEffect(() => {
    fetch_articles();
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.id);
  };

  const filteredArticles = articlesList.filter(article => {

    const articleYear = article.date.split('-')[0]; 

    return articleYear === selectedDate;
  });

  if (loading) {
    return <div>Loading featured articles...</div>;
  }

  if (error) {
    return <div>An error has occurred: {String(error)}</div>;
  }

  return (
    <div>
      <div className="FeaturedArticles">
        <h2>Featured Articles</h2>
        <div className="yearBox">
          <h4>Date</h4>
          <div className="radio-item">
            <label htmlFor="2020">2020</label>
            <input
              type="radio"
              className="radio"
              name="Year"
              id="2020"
              checked={selectedDate === "2020"}
              onChange={handleDateChange}
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
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
      <div className="articles-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div className="article-item" key={index}>
              <Article
                imgurl={article.imageurl || HomeImg} // Fallback to a default image
                title={article.title || "Untitled"}
                rating={(article.rating) || ""}
                description={article.description || "No description available"}
                date={article.date || "No date"}
                author={article.author || "Unknown"}
                timeToRead={article.readingTime || "Unknown time"}
              />
            </div>
          ))
        ) : (
          <div>No articles found for the selected date.</div>
        )}
      </div>
    </div>
  );
};
export default FeaturedArticles;

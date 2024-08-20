import React, { useState } from "react";
import { Article } from "./Article";
import '../styles/FeaturedArticles.styles.css';
import BusinessImg from '../img/business.jpg';
import CoffeeImg from '../img/coffee.jpg';
import HomeImg from '../img/home.svg';
interface FeaturedArticlesProps {
  date: string;
}

const MockData = [ // Replace this with fetch_articles if needed
  {
    imgurl: BusinessImg,
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2020",
    author: "Me",
    ttr: 2,
  },
  {
    imgurl: BusinessImg,
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2020",
    author: "Me",
    ttr: 2,
  },
  {
    imgurl: CoffeeImg,
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2021",
    author: "Me",
    ttr: 2,
  },
  {
    imgurl: CoffeeImg,
    title: "Title 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2021",
    author: "Me",
    ttr: 2,
  },
  {
    imgurl: CoffeeImg,
    title: "Title 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2021",
    author: "Me",
    ttr: 2,
  },
  {
    imgurl: CoffeeImg,
    title: "Title 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse repellendus nulla eius placeat eos dicta, dolore corporis sed voluptatem consequuntur similique! Nulla, incidunt! Amet perferendis consequatur maiores? Quia eum, tempore autem aliquam, necessitatibus neque molestias repudiandae cumque rerum at nulla, molestiae praesentium. Eius soluta itaque corrupti vitae optio expedita.",
    date: "01.02.2021",
    author: "Me",
    ttr: 2,
  },
];



export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ date }) => {  //takes the date as a prop
  const [selectedDate, setSelectedDate] = useState<string>(date); //selectedDate holds the current date selected by the use

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {  //updates the selected date
    setSelectedDate(event.target.id); 
  };
  const filteredArticles= MockData.filter(
    article =>{
    const articleYear=article.date.split('.')[2];
    return articleYear === selectedDate;
  });

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
    </div>
      <div className="articles-list">
        {filteredArticles.map((article, index) => (
          <div className="article-item"> 
          <Article
            key={index}
            imgurl={article.imgurl}
            title={article.title}
            description={article.description}
            date={article.date}
            author={article.author}
            timeToRead={article.ttr}
          />
          </div>
        ))}
      </div>
    </div>    
  );
};

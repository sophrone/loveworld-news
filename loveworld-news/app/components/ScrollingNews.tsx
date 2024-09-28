import React from 'react';

const newsItems = [
  "Breaking: Major Earthquake Hits City",
  "Sports Update: Local Team Wins Championship",
  "Technology: New Smartphone Released",
  "Health: New Study on Nutrition",
  "Entertainment: Upcoming Movie Premieres",
  // Add more news items as needed
];

const ScrollingNews: React.FC = () => {
  return (
    <div className="scrolling-news">
      <h2>Latest News</h2>
      <div className="news-items">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingNews;

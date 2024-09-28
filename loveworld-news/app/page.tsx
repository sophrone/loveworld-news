"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Pagination from './components/Pagination'; 
import healingStreamsImg from '/public/healing-streams.jpg';
import iosUpdateImg from '/public/ios-update.jpg';
import uefaImg from '/public/uefa.jpg';
import economyImg from '/public/economy.jpg';
import healthImg from '/public/health.jpg';
import entertainmentImg from '/public/entertainment.jpg';

const articles = [
  {
    title: '🎉 Breaking News: October 2024 Healing Streams Live Healing Services',
    img: healingStreamsImg,
    content: 'Join us for the October 2024 Healing Streams Live Healing Services with Pastor Chris Oyakhilome and Pastor Benny Hinn. Experience miraculous healings and inspiring testimonies from participants around the globe.',
    link: '/healing-streams' 
  },
  {
    title: '📱 Technology Update: iOS 18 Released - Is It Worth the Hype?',
    img: iosUpdateImg,
    content: 'Apple has just launched the much-anticipated iOS 18. Discover the new features and enhancements that could change the way you use your device.',
    link: '/ios-update' 
  },
  {
    title: '⚽ Sports: The New UEFA Champions League Season Has Begun!',
    img: uefaImg,
    content: 'The new season of the UEFA Champions League is underway, and it’s already been filled with surprises and upsets.',
    link: '/uefa-champions' 
  },
  {
    title: '💰 Economic Insights: Global Markets React to New Policies',
    img: economyImg,
    content: 'Recent changes in global economic policies have led to significant fluctuations in market trends.',
    link: '/economic-insights' 
  },
  {
    title: '🩺 Health Update: New Breakthroughs in Medical Technology',
    img: healthImg,
    content: 'The medical field is witnessing groundbreaking innovations that promise to revolutionize healthcare.',
    link: '/health-update' 
  },
  {
    title: '🎬 Entertainment Buzz: Upcoming Movies to Watch',
    img: entertainmentImg,
    content: 'Movie enthusiasts are in for a treat! Here’s a list of the most anticipated films releasing this season.',
    link: '/entertainment-buzz' 
  },
  // Add more articles as needed
];

const LiveVideo: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto' }}>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/live_stream?channel=@LofiGirl"
        title="Live Stream"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      ></iframe>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <LiveVideo />
      <div className="articles-grid">
        {currentArticles.map((article, index) => (
          <article key={index} className="article">
            <a href={article.link} className="article-title">
              <h3>{article.title}</h3>
            </a>
            <div className="article-container">
              <a href={article.link}> 
                <Image 
                  src={article.img} 
                  alt={article.title} 
                  className="article-image" 
                  width={500} 
                  height={333} 
                  layout="responsive"
                  placeholder="blur"
                  priority 
                />
              </a>
              <a href={article.link} className="article-content">
                <p>{article.content}</p>
              </a>
            </div>
            <a href={article.link}> 
              <button className="read-more">Read More</button>
            </a>
          </article>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </>
  );
};

export default Home;

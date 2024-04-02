import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './left-panel.css';

const LeftPanel = () => {
  const [disasterNews, setDisasterNews] = useState([]);
  const apiKey = 'cf821e72a5ee405e877d5c350fd93bd2'; // Replace with your actual API key

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=fire%20OR%20flood&apiKey=${apiKey}`);
      setDisasterNews(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="left-panel">
      <div className="leftcont">
      <h2>Latest Disaster News</h2>
      <ul>
        {disasterNews.map((newsItem) => (
          <li key={newsItem.title}>
            <a href={newsItem.url} target="_blank" rel="noreferrer noopener">
              {newsItem.title}
            </a>
          </li>
        ))}
        <li><a href="https://www.downtoearth.org.in/news/natural-disasters/peninsular-river-basins-in-india-more-likely-to-face-widespread-flooding-than-transboundary-rivers-study-93504">Peninsular river basins in India more likely to face widespread flooding than transboundary rivers</a></li>
        <li><a href="https://www.downtoearth.org.in/news/natural-disasters/5-9-magnitude-earthquake-strikes-seismically-active-north-central-china-over-100-deaths-reported-93462">5.9 magnitude earthquake strikes seismically active North Central China, over 100 deaths reported</a></li>
        <li><a href="https://www.downtoearth.org.in/news/natural-disasters/rains-continue-to-pound-southern-tamil-nadu-93437">Rains continue to pound southern Tamil Nadu</a></li>
      </ul>
      </div>
    </div>
  );
};

export default LeftPanel;

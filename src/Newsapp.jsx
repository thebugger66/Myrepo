import React, { useEffect, useState } from 'react';

const Newsapp = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
      .then(response => response.json())
      .then(data => {
        setNews(data.items);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>TechCrunch News</h1>
      <ul style={styles.list}>
        {news.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.description}>{item.description}</p>
            <a style={styles.link} href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
  },

  
  title: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  description: {
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },

};

export default Newsapp

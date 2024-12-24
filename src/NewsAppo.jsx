import React, { useEffect, useState } from "react";

const NewsAppo = () => {
  const [news, setNews] = useState([]); // State to store news
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch data on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news.");
        }
        const data = await response.json();
        setNews(data.items); // Set fetched news to state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Disable loading state
      }
    };

    fetchNews();
  }, []);

  // Return the UI
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>TechCrunch News</h1>
      
      {/* Handle loading state */}
      {loading && <p>Loading...</p>}

      {/* Handle error state */}
      {error && <p style={styles.error}>Error: {error}</p>}

      {/* Render news items */}
      <ul style={styles.list}>
        {news.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.description}>{item.description}</p>
            <a
              style={styles.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
            <h3>Author</h3>
            <p style={styles.author}>{item.author || "Unknown"}</p>

            {item.thumbnail && (
              <img
                src={item.thumbnail}
                alt={item.title}
                style={styles.image}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "20px",
  },
  title: {
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  description: {
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  author: {
    fontStyle: "italic",
    color: "#333",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "10px",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};

export default NewsAppo;

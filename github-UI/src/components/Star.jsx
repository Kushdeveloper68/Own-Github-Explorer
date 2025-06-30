import { useOutletContext } from 'react-router-dom';
import "../style/star.css";

const Star = () => {
   const { stars } = useOutletContext();
   console.log(stars)
  return (
    <div className="starred-container">
      <h2>⭐ Starred Repositories: {stars.length}</h2>
      <div className="repo-grids">
        {stars.map((repo) => (
          <div key={repo.id} className="repo-cards">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description"}</p>
            <div className="repo-meta">
              <span>{repo.language}</span>
              <span>★ {repo.stargazers_count}</span>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Star;

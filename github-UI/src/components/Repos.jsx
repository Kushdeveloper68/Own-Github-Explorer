// components/RepoCard.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "../style/repos.css"
export default function Repos() {
   const { repos } = useOutletContext();
  return (
    <> 
    <div className='repo-container'>
      <h1>Repositoires: {repos.length}</h1>
    <div className='main-repo-dev' id='repos'>
         {Array.isArray(repos) && repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
      <div className="repo-card__info">
        <h3 className="repo-card__name">{repo.name}</h3>
        <p className="repo-card__desc">{repo.description}</p>
        <p className="date-p">Created at:<b>{repo.created_at}</b></p>
        <p className='date-p'>Updated at:<b>{repo.pushed_at}</b></p>
        <p className='date-p'>Type: <b>{repo.visibility}</b></p>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card__btn"
        >
          View on GitHub →
        </a>
      </div>
     
    </div>
     ))}
        </div>
        </div>
     </>
  );
}

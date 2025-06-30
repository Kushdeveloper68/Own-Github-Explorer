import React from 'react'
import { useState, useEffect } from 'react'
import '../style/home.css'
import { FollowerNumberShowcase, Navbar, Footer, Repos } from './index'
import { useParams } from 'react-router-dom'

import useGithubRepo from '../hooks/useGithubRepo'
import useGithubUser from '../hooks/useGithubUser'
import useGithubStar from '../hooks/useGithubStar'
import { Outlet } from 'react-router-dom'
function Home ({}) {


  const { username } = useParams()
  const [repos, setRepos] = useState([])
  const [stars, setStars] = useState([])
  const [user, setUser] = useState([])
  const userData = useGithubUser(username)
  const repoData = useGithubRepo(username)
  const starData = useGithubStar(username)

  useEffect(() => {
    setUser(userData)
  }, [userData, username])

  useEffect(() => {
    setStars(starData)
  }, [starData, username])

  useEffect(() => {
    setRepos(repoData)
  }, [repoData, username])

if (user.length <= 0) {
   return (<div className='loading-div'><p>Loading</p></div>
   )
}
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    public_repos
  } = user;

  return (
    <>
      
      <Navbar name={name} avatar_url={avatar_url} html_url={html_url} username={username}/>
      <section className='home-section'>
        <div className='profile'>
          <div className='profile-image'>
            <img
              src={
                avatar_url ||
                'https://tse2.mm.bing.net/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain'
              }
              alt='avatar'
            />{' '}
            {/* need to add image source here */}
          </div>
          <div className='profile-info'>
            <h1>{username}</h1> {/* need to add username source here */}
            <p className='bio'>{bio}</p> {/* need to add bio source here */}
            <p>
              Location: <span>{location}</span>
            </p>
            {/* need to add location source here */}
            <p>
              Company: <span>{company}</span>
            </p>
            {/* need to add company source here */}
          </div>
        </div>
        <div className='follower-number-showcase-div'>
          <FollowerNumberShowcase
            label='Repositories'
            value={public_repos} // Replace with actual value
          />
          <FollowerNumberShowcase
            label='Followers'
            value={followers} // Replace with actual value
          />
          <FollowerNumberShowcase
            label='Following'
            value={following} // Replace with actual value
          />
          <FollowerNumberShowcase
            label='Member since'
            value={created_at} // Replace with actual value
          />
        </div>
      </section>
      
      {Array.isArray(stars) && stars.length > 0  ? (
        <Outlet context={{ repos, stars}} />
      ) : (
        <div className='loading-div'><p>Loading</p></div>
      )}
      <Footer />
    </>
  )
}

export default Home

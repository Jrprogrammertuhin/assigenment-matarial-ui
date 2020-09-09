import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './Component/Card/MediaCard';
import LearnMore from './Component/Button/LearnMore/LearnMore';

function App() {
  const [post , setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data))
  }, [])
  // const [lernMore , setLearnMore] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  //   .then(response => response.json())
  //   .then(data => setLearnMore(data))
  // }, [])
  return (
    <div>
      {
        post.map(post => <MediaCard post={post}></MediaCard>)
      }
      {
        // lernMore.map(lernMore => <LearnMore lernMore={lernMore}></LearnMore>)
      }
    </div>
    
  );
}

export default App;

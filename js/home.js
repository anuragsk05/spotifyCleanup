import React, { useState } from 'react';
import './Home.css';  // Optionally, you can move your styles here

const Home = ({ navigateTo }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistImage, setPlaylistImage] = useState('https://via.placeholder.com/250');

  const showPlaylists = () => {
    setShowPlaylist(true);
    // In a real app, you could fetch and set a dynamic image URL here
    setPlaylistImage('https://via.placeholder.com/250');
  };

  const selectPlaylist = () => {
    // You could navigate to another route here
    // For example, if you're using React Router:
    // navigate('/songs');
    alert("Select a playlist to clean");
  };

  return (
    <div className="home-container">
      <div className="top-bar">Spotify Cleanup</div>

      {/* Main buttons */}
      <div className="main-buttons">
        <div className="btn-container">
          <img src="https://via.placeholder.com/50x50?text=🎶" alt="Playlist Icon" />
          <button className="btn" onClick={showPlaylists}>Clean Playlists</button>
        </div>

        <div className="btn-container">
          <img src="https://via.placeholder.com/50x50?text=📂" alt="Song Icon" />
          <button className="btn" onClick={selectPlaylist}>Select a Playlist to Clean</button>
        </div>
      </div>

      {/* Playlist container */}
      {showPlaylist && (
        <div className="playlist-container">
          <img src={playlistImage} alt="Playlist" className="playlist-image" />
          <div className="action-buttons">
            <button className="action-btn keep-btn">Keep</button>
            <button className="action-btn remove-btn">Remove</button>
          </div>
        </div>
      )}

      <div className="footer">A personal project by Anurag Komaragiri</div>
    </div>
  );
};

export default Home;

import React from 'react';
import { FaHeart, FaShare, FaComment } from 'react-icons/fa';
import './Card.css';

const Card = ({ title, author, likes, comments, profilePicture }) => {
  return (
    <div className="card">
      <div className="card-image">
        {profilePicture && <img src={profilePicture} alt="Profile" />}
      </div>
      <div className="card-details">
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
      </div>
      <div className="card-actions">
        <div className="card-button">
          <FaHeart className="icon" />
          <span className="label">Likes</span>
        </div>
        <div className="card-button">
          <FaShare className="icon" />
          <span className="label">Share</span>
        </div>
        <div className="card-button">
          <FaComment className="icon" />
          <span className="label">Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Card;


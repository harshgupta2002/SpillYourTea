import React, { useState } from 'react';
import '../PostView/PostView.css'; // Ensure the CSS file is available
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";


const PostView = () => {
  const [comments, setComments] = useState([
    { username: 'aleem_siddiqui', text: "Pose to aise de Raha hai jaise world's best fielder ho 🤣💀" },
    { username: 'ved_vyas_', text: '1 rupees ki Pepsi jaddu bhai sexy🔥' },
    { username: 'simranalways69', text: 'Gambhir hates Jadeja because he is from csk 🥺🙃' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [isPostVisible, setIsPostVisible] = useState(true);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { username: 'Mayank Singh', text: newComment }]);
      setNewComment('');
    }
  };

  const handleClosePost = () => {
    setIsPostVisible(false);
  };

  if (!isPostVisible) return null;

  return (
    <div className='fixed left-0 top-0 flex justify-center items-center h-full w-full bg-black bg-opacity-90'>
      <div className='bg-[#1E1E1D] h-[85%] w-[90%] shadow-xl shadow-black rounded-xl overflow-y-auto'>
        <div className="post-page">
          <div className="post-container">
            <div className="post-header">
              <div className="gossip">
                <h2>Gossip Time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="post-actions">
              <button className="action-btn">
              <FaRegHeart color='#808080d0' size={24} /> Like
              </button>
              <button className="action-btn">
              <FaRegCommentDots color='#808080d0' size={24} /> Comment
              </button>
              <button className="action-btn">
              <IoMdShare color='#808080d0' size={24} /> Share
              </button>
            </div>
            <div className="post-caption">
              <span className="username">Mayank Singh:  </span>
              <span>Black eyes hypnotise 😎 #seaview</span>
            </div>
          </div>
          <div className="comment-container">
            <button className="close-btn" onClick={handleClosePost}>×</button>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <p key={index} className="comment">
                  <span className="comment-username">{comment.username}: </span>
                  {comment.text}
                </p>
              ))}
            </div>
            <div className="comment-box">
              <input
                type="text"
                placeholder="Add a comment..."
                className="comment-input"
                value={newComment}
                onChange={handleCommentChange}
              />
              <button className="comment-btn" onClick={handlePostComment}>
                <FontAwesomeIcon icon={faShare} /> Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
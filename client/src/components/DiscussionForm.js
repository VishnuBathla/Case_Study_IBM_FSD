import React, { useState } from 'react';

const DiscussionForm = () => {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  const [activePostId, setActivePostId] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePostClick = () => {
    if (title.trim() !== '') {
      const newPost = {
        id: Date.now(),
        title: title.trim(),
        comments: [],
      };
      setPosts([...posts, newPost]);
      setTitle('');
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentClick = (postId) => {
    if (comment.trim() !== '') {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, comment.trim()],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setComment('');
      setActivePostId(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Course Discussion</h2>

      <textarea
        style={styles.input}
        placeholder="Enter your thoughts"
        value={title}
        onChange={handleTitleChange}
      />
      <button style={styles.button} onClick={handlePostClick}>
        Post
      </button>

      <div style={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <ul style={styles.comments}>
              {post.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            {activePostId === post.id ? (
              <div>
                <textarea
                  style={styles.commentInput}
                  placeholder="Enter your comment"
                  value={comment}
                  onChange={handleCommentChange}
                />
                <button
                  style={styles.commentButton}
                  onClick={() => handleCommentClick(post.id)}
                >
                  Comment
                </button>
              </div>
            ) : (
              <button
                style={styles.commentButton}
                onClick={() => setActivePostId(post.id)}
              >
                Comment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    minHeight: '80px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  posts: {
    marginTop: '20px',
  },
  post: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  postTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  comments: {
    marginBottom: '10px',
    listStyleType: 'none',
    paddingLeft: '0',
  },
  commentInput: {
    width: '100%',
    minHeight: '60px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  commentButton: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default DiscussionForm;

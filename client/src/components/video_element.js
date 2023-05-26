import React, { useEffect, useState } from 'react';

const VideoElement = ({ cur_video, number, navigate, isLast, changeData, finish}) => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setTitle(cur_video.title);
    setThumbnail(cur_video.thumbnail);
    setVideoLink(cur_video.videoLink);
    setDescription(cur_video.description);
    setErrors({});
  }, [cur_video, number]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'thumbnail') {
      setThumbnail(value);
    } else if (name === 'videoLink') {
      setVideoLink(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const ErrorChecker = () => {
    const newErrors = {};

    if (title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    if (thumbnail.trim() === '') {
      newErrors.thumbnail = 'Thumbnail is required';
    }

    if (videoLink.trim() === '') {
      newErrors.videoLink = 'Video link is required';
    }

    if (description.trim() === '') {
      newErrors.description = 'Description is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = ErrorChecker();
    if (Object.keys(newErrors).length === 0) {
      // Create the video object with the entered data
      const videoObject = {
        title,
        thumbnail,
        videoLink,
        description,
      };

      changeData(number, videoObject);
      // Reset the form inputs
      setTitle('');
      setThumbnail('');
      setVideoLink('');
      setDescription('');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleClear = () => {
    setTitle('');
    setThumbnail('');
    setVideoLink('');
    setDescription('');
    setErrors({});
  };

  const handlePrevious = (e) => {
    const newErrors = ErrorChecker();
    if (JSON.stringify(newErrors) === '{}') {
      handleSubmit(e);
      navigate('decr');
    } else {
      setErrors(newErrors);
    }
  };

  const handleNext = (e) => {
    const newErrors = ErrorChecker();
    if (JSON.stringify(newErrors) === '{}') {
      handleSubmit(e);
      if (!isLast) {
        navigate('incr');
      } else {
        finish();
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Video {number + 1}</h2>
      <div style={styles.formGroup}>
        <label htmlFor="titleInput" style={styles.boldText}>
          Title:
        </label>
        <input
          type="text"
          id="titleInput"
          name="title"
          value={title}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.title && <span style={styles.error}>{errors.title}</span>}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="thumbnailInput" style={styles.boldText}>
          Thumbnail:
        </label>
        <input
          type="text"
          id="thumbnailInput"
          name="thumbnail"
          value={thumbnail}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.thumbnail && <span style={styles.error}>{errors.thumbnail}</span>}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="videoLinkInput" style={styles.boldText}>
          Video Link:
        </label>
        <input
          type="text"
          id="videoLinkInput"
          name="videoLink"
          value={videoLink}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.videoLink && <span style={styles.error}>{errors.videoLink}</span>}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="descriptionInput" style={styles.boldText}>
          Description:
        </label>
        <textarea
          id="descriptionInput"
          name="description"
          value={description}
          onChange={handleInputChange}
          style={styles.textarea}
          required
        ></textarea>
        {errors.description && <span style={styles.error}>{errors.description}</span>}
      </div>
      <div style={styles.buttonGroup}>
        {number !== 0 && (
          <button type="button" style={styles.button} onClick={handlePrevious}>
            Previous
          </button>
        )}
        <button type="button" style={styles.button} onClick={handleNext}>
          {isLast ? 'Finish' : 'Next'}
        </button>
        <button type="button" style={styles.button} onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '0 auto',
  },
  heading: {
    margin: '20px 0 10px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  boldText: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  input: {
    width: '300px',
    marginLeft: '10px',
    padding: '5px',
  },
  textarea: {
    width: '300px',
    height: '100px',
    marginLeft: '10px',
    padding: '5px',
  },
  error: {
    color: 'red',
    marginLeft: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  button: {
    marginLeft: '10px',
  },
};

export default VideoElement;

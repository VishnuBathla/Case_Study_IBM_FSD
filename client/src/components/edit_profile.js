import { Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

function Edit_Profile({ modal, setModal, setCurrent, current }) {
  const [name, setName] = useState(current.name);
  const [expertise, setExpertise] = useState(current.expertise);
  const [phone, setPhone] = useState(current.phone);
  const [email, setEmail] = useState(current.email);
  const [bio, setBio] = useState(current.description);
  const [imageUrl, setImageUrl] = useState(current.imageUrl);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'Name') {
      setName(value);
    } else if (id === 'Designation') {
      setExpertise(value);
    } else if (id === 'Phone no.') {
      setPhone(value);
    } else if (id === 'Email') {
      setEmail(value);
    } else if (id === 'Bio') {
      setBio(value);
    } else if (id === 'Image Url') {
      setImageUrl(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (expertise.trim() === '') {
      newErrors.expertise = 'Expertise is required';
    }

    if (phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (bio.trim() === '') {
      newErrors.bio = 'Bio is required';
    }

    if (imageUrl.trim() === '') {
      newErrors.imageUrl = 'Image URL is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      setCurrent({
        name: name,
        expertise: expertise,
        phone: phone,
        email: email,
        description: bio,
        imageUrl: imageUrl
      });
      setName('');
      setExpertise('');
      setPhone('');
      setEmail('');
      setBio('');
      setImageUrl('');
      setErrors({});
      setModal(false);
    }
  };

  const handleModalClose = () => {
    setName('');
    setExpertise('');
    setPhone('');
    setEmail('');
    setBio('');
    setImageUrl('');
    setErrors({});
    setModal(false);
  };

  return (
    <div>
      <div>
        {modal && (
          <Modal visible={modal} footer={null} onCancel={handleModalClose} centered>
            <div style={{ backgroundColor: '#f8f8f8', padding: '2rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Name:</span>
                <input type="text" id="Name" value={name} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Expertise:</span>
                <input type="text" id="Designation" value={expertise} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.expertise && <span style={{ color: 'red' }}>{errors.expertise}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Phone no.:</span>
                <input type="text" id="Phone no." value={phone} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Email:</span>
                <input type="text" id="Email" value={email} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Bio:</span>
                <TextArea id="Bio" value={bio} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.bio && <span style={{ color: 'red' }}>{errors.bio}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Image Url:</span>
                <input type="text" id="Image Url" value={imageUrl} onChange={handleInputChange} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
                {errors.imageUrl && <span style={{ color: 'red' }}>{errors.imageUrl}</span>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer' }}>Submit</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Edit_Profile;

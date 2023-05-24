import { Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

function Edit_Profile({ modal, setModal,setCurrent,current }) {
  const [name, setName] = useState(current.name);
  const [expertise, setExpertise] = useState(current.expertise);
  const [phone, setPhone] = useState(current.phone);
  const [email, setEmail] = useState(current.email);
  const [bio, setBio] = useState(current.description);
  const [imageUrl, setImageUrl] = useState(current.imgUrl);
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
        "name":name,
        "expertise":expertise,
        "phone":phone,
        "email":email,
        "description": bio,
        "imgUrl":imageUrl
      })
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
          <Modal open footer={null} onCancel={handleModalClose}>
            <span>Name</span>
            <input type="text" id="Name" value={name} onChange={handleInputChange} />
            {errors.name && <span>{errors.name}</span>}
            <br />
            <br />
            <span>Expertise</span>
            <input type="text" id="Designation" value={expertise} onChange={handleInputChange} />
            {errors.expertise && <span>{errors.expertise}</span>}
            <br />
            <br />
            <span>Phone no.</span>
            <input type="text" id="Phone no." value={phone} onChange={handleInputChange} />
            {errors.phone && <span>{errors.phone}</span>}
            <br />
            <br />
            <span>Email</span>
            <input type="text" id="Email" value={email} onChange={handleInputChange} />
            {errors.email && <span>{errors.email}</span>}
            <br />
            <br />
            <span>Bio</span>
            <TextArea id="Bio" value={bio} onChange={handleInputChange} />
            {errors.bio && <span>{errors.bio}</span>}
            <br />
            <br />
            <span>Image Url</span>
            <input type="text" id="Image Url" value={imageUrl} onChange={handleInputChange} />
            {errors.imageUrl && <span>{errors.imageUrl}</span>}
            <br />
            <br />
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Edit_Profile;

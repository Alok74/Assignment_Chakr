import React, { useState } from 'react';
import "./ProfilePage.css"

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePicture(null);
  };

  const handleChangePassword = () => {
    alert('Password change link sent to your email.');
  };

  const handleDeleteAccount = () => {
    alert('Account deleted.');
  };

  return (
    <div className="profile-page">
      <div className="profile-picture">
        <img
          src={profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
        <input type="file" onChange={handlePictureUpload} />
        <button className='remove'
        onClick={handleRemovePicture}>Remove</button>
      </div>
      <div className="profile-info">
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} 
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
        <div className="danger-zone">
          <button onClick={handleDeleteAccount}>Delete account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

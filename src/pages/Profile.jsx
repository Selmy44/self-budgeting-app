import React from 'react';
import '../styles/Profile.css';
import profileImg from '../assets/profile.jpeg';


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImg} alt="Profile" />
        <p className="edit-link">Edit Profile picture</p>
      </div>

      <div className="profile-details">
        <h2>My Profile Info</h2>

        <label>Name</label>
        <input type="text" value="Selmy NSHUTI" readOnly />

        <label>Email</label>
        <input type="email" value="selmynshuti@awesome.rw" readOnly />

        <label>Phone</label>
        <input type="text" value="+250 789 000 000" readOnly />

        <h2>Edit Password</h2>
        <div className="password-section">
          <div>
            <label>Current password</label>
            <input type="password" value="********" readOnly />
          </div>
          <div>
            <label>New password</label>
            <input type="password" value="" />
          </div>
        </div>

        <button className="save-btn" disabled>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;

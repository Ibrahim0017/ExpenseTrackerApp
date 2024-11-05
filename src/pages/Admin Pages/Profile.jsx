import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Profile = () => {
  const [value, setValue] = useState();
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  // Function to handle image upload
  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to delete the uploaded image
  const handleDeleteImage = () => {
    setProfileImage("https://via.placeholder.com/150");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex space-x-2 mt-2">
            {/* Image upload button */}
            <label htmlFor="upload-button" className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base">
              Upload New
            </label>
            <input
              type="file"
              id="upload-button"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {/* Delete image button */}
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm md:text-base"
              onClick={handleDeleteImage}
            >
              Delete Avatar
            </button>
          </div>
        </div>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium">First Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="First name" className="w-full border-gray-300 rounded-lg p-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Last Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Last name" className="w-full border-gray-300 rounded-lg p-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input type="email" placeholder="example@gmail.com" className="w-full border-gray-300 rounded-lg p-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Mobile Number <span className="text-red-500">*</span></label>
          <PhoneInput
            international
            defaultCountry="NG"
            value={value}
            onChange={setValue}
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          <div className="flex items-center space-x-4 mt-1">
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="text-blue-500" />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="text-blue-500" />
              <span>Female</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">ID</label>
          <input type="text" placeholder="1559 000 7788 8DER" className="w-full border-gray-300 bg-gray-100 rounded-lg p-2 mt-1" disabled />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-gray-700 font-medium">Residential Address</label>
          <input type="text" placeholder="Ib street orogun ibadan" className="w-full border-gray-300 rounded-lg p-2 mt-1" />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <button className="bg-blue-600 text-white w-full md:w-auto px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

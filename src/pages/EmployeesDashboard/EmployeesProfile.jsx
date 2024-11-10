import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import swal from "sweetalert";
import { useSelector } from "react-redux";

const EmployeesProfile = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", mobileNumber);
    formData.append("address", address);
    formData.append("avatar", avatar);

    try {
      console.log(formData);
      // Send form data to the server
      const res = await axios.patch(
        "https://expense-tracker-ruug.onrender.com/api/employee/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${tokenHolder}`,
          },
        }
      );

      if (res.status === 200) {
        swal("Success!", "Profile updated successfully!", "success");
      } else {
        swal("Failed!", "Failed to update profile", "error");
      }
    } catch (error) {
      console.log("Error updating profile:", error);
      swal("Failed!", "Failed to update profile", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-2 mt-2">
            <label
              htmlFor="upload-button"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base"
            >
              Upload New
            </label>
            <input
              type="file"
              id="upload-button"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>

      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-gray-700 font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            international
            defaultCountry="NG"
            value={mobileNumber}
            onChange={setMobileNumber}
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-gray-700 font-medium">
            Residential Address
          </label>
          <input
            type="text"
            placeholder="Ib street orogun ibadan"
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white w-full md:w-auto px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeesProfile

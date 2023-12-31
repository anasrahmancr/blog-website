import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  try {
    const formData = new FormData();
    formData.append('file', image); 
  
    // Append other form data
    formData.append('title', title);
    formData.append('description', description);
  
    const response = await axios.post("http://localhost:5000/blog/createBlog", formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
      withCredentials: true, 
    });
    setTitle("");
    setDescription("");
    setImage(null);
    console.log("Blog created", response.data);
    navigate('/home');
  }catch (error) { console.log(error.message);}
  };

  return (
    <div className="ml-10 mt-5 mr-10">
      <h1 className="text-2xl font-semibold mb-4">Create a Blog</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-600">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            rows="4"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

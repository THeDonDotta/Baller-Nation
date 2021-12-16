import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/editpost.css'

function EditPost({ posts, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    post: "",
    image: "",
  });
  const { post, image } = formData;
  const { id } = useParams();

  // useEffect(() => {
  //     const prefillFormData = () => {
  //         const postItem = posts.find((post) => post.id === Number(id));
  //         setFormData({ name: foodItem.name });
  //     };
  //     if (foods.length) prefillFormData();
  // }, [foods, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h3>Edit Post</h3>
      <label>
        Update post
        <textarea
          type="text"
          name="post"
          rows='6' 
          cols='30'
          value={post}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="image"
          value={image}
          onChange={handleChange}
        /> */}
      </label>
      <button>Submit</button>
      
      </form>
    <img className='update-image' src="https://i.imgur.com/NM1hb80.jpg" title="source: imgur.com" />
    </div>
  );
}

export default EditPost;

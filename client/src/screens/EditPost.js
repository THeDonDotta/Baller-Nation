import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h3>Edit Post</h3>
      <label>
        Update post
        <input
          type="textarea"
          name="post"
          value={post}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default EditPost;

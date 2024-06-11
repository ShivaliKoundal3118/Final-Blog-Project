import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addblog, clearall, deleteblog, updateblog } from "./BlogSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Headers from "../HeadFoot/Headers";
import Footer from "../HeadFoot/Footer";
import { useNavigate } from "react-router";
const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(15, "At least 15 characters")
    .min(2, "At least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
  subtitle: Yup.string()
    .required("Sub-Title is required")
    .max(30, "At least 30 characters")
    .min(2, "At least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
  description: Yup.string()
    .required("Description is required")
    .max(50, "At least 50 characters")
    .min(2, "At least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
});
function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);
  const [formVisible, setFormVisible] = useState(true);
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    if (update) {
      const updatedBlog = { id: update.id, ...values };
      dispatch(updateblog(updatedBlog));
      setUpdate(null);
      navigate('/blogs/update')
    } else {
      const newBlog = { id: Date.now(), ...values };
      dispatch(addblog(newBlog));
    }
    resetForm();
    setFormVisible(false);
  };
  const handleEdit = (blog) => {
    setFormVisible(true);
    setUpdate(blog);
    navigate("/blogs/edit");
  };
  const handleDelete = (id) => {
    dispatch(deleteblog(id));
    navigate("/blogs/delete");
  };
  const handleClearAll = () => {
    dispatch(clearall());
    navigate("/blogs/clearall");
  };
  return (
    <center>
      <Headers />
      <br />
      <br />
      <div className="blogger">
        <div className="bloger">
          <h1 className="blog-head">
            {blogs.length === 0 ? "No Blogs" : "Blogs"}
          </h1>
          {!formVisible &&(
          <button
            className="create-blog-btn"
            onClick={() => setFormVisible(true)}
          >
            Create New Blog
          </button>
          )}
        </div>
        <br/>
        {formVisible && (
          <div className="box-container">
            <Formik
              initialValues={
                update || { title: "", subtitle: "", description: "" }
              }
              validationSchema={BlogSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ resetForm }) => (
                <Form>
                  <label
                    style={{ textAlign: "left", fontSize: "25px" }}
                    htmlFor="title"
                  >
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                  <ErrorMessage
                    className="error-msg"
                    name="title"
                    component="div"
                  />
                  <label
                    style={{ textAlign: "left", fontSize: "25px" }}
                    htmlFor="subtitle"
                  >
                    Sub-Title:
                  </label>
                  <Field
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    placeholder="Sub-Title"
                  />
                  <ErrorMessage
                    className="error-msg"
                    name="subtitle"
                    component="div"
                  />
                  <label
                    style={{ textAlign: "left", fontSize: "25px" }}
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                  <ErrorMessage
                    className="error-msg"
                    name="description"
                    component="div"
                  />
                  <button type="submit" className="create-blog-btn">
                    {update ? "Update Blog" : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="create-blog-btnn"
                    onClick={() => {
                      setFormVisible(false);
                      resetForm();
                      setUpdate(null);
                    }}
                  >
                    Cancel
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
        <br />
        <div className="blogs-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <h2>{blog.title}</h2>
              <h3>{blog.subtitle}</h3>
              <p>{blog.description}</p>
              <button onClick={() => handleEdit(blog)}>Edit</button>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          ))}
        </div>
        {blogs.length > 0 && (
          <button className="create-blog-btnnn" onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>
      <Footer />
    </center>
  );
}

export default Blog;

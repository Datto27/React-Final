import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { categories } from "../constants/categories";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    age: '',
    category: "",
    difficulty: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string("Should be text")
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(10, "Username must not exceed 20 characters"),
    age: yup.number("Should be number").required("Age is required"),
    category: yup.string().required("Category is required"),
    difficulty: yup.string().required("Difficulty is required"),
  });

  const handleSubmit = (values) => {
    return navigate(`/quiz/${values.username}?age=${values.age};category=${values.category};difficulty=${values.difficulty}`)
  };

  return (
    <div className="page">
      <div className="welcome-card">
        <h1 className="title">Welcome To Quiz App</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          on
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div className="input-container">
                <label htmlFor="username">Username:</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className={errors.username && touched.username ? "error" : ""}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-msg"
                />
              </div>
              <div className="input-container">
                <Field
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Age"
                  className={errors.age && touched.age ? "error" : ""}
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="error-msg"
                />
              </div>
              <div className="row">
                <div>
                  <Field as="select" id="category" name="category">
                    {categories.map((category, i) => {
                      return <option key={i} value={category.id}>
                        {category.label}
                      </option>
                    })}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="error-msg"
                  />
                </div>
                <div>
                  <Field as="select" id="difficulty" name="difficulty">
                    <option className='option' value="">-</option>
                    <option className='option' value="easy">Easy</option>
                    <option className='option' value="medium">Medium</option>
                    <option className='option' value="hard">Hard</option>
                  </Field>
                  <ErrorMessage
                    name="difficulty"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div className="row space-bet">
                <button className="text-btn" onClick={() => navigate('/history')}>Show History</button>
                <button type="submit" className="primary-btn">Start</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default WelcomePage;

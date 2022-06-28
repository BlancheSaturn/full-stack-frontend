import "./AddCourse.scss";
import Header from "../Header/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({
    company: "",
    name: "",
    location: "",
    currency: "",
    price: 0.0,
    duration: "",
    summary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      // alert("Course Successfully Added")
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="add-course">
      <div>
        <Header />
      </div>

      <div className="add-course__header">Add Your Course</div>
      <div className="add-course__title">Create New Course</div>
      <div className="add-course__list">
        <Link to={`/`}>
          <button
            className="add-course__list--home"
            data-testid="add-button"
            type="button"
            value="Reset"
          >
            Show Course List
          </button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="add-course__main">
        <div className="add-course__info">
          <p className="add-course__info--label">Company:</p>
          <input
            className="add-course__info--company"
            onInput={(e) => setCourse({ ...course, company: e.target.value })}
            placeholder="Company Name"
          ></input>
        </div>
        <div className="add-course__info">
          <p className="add-course__info--label">Name:</p>
          <input
            className="add-course__info--name"
            onInput={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          ></input>
        </div>
        <div className="add-course__info">
          <p className="add-course__info--label">Location:</p>
          <input
            className="add-course__info--location"
            onInput={(e) => setCourse({ ...course, location: e.target.value })}
            placeholder="Location of the Course"
          ></input>
        </div>
        <div className="add-course__info">
          <p className="add-course__info--label">Currency:</p>
          <input
            className="add-course__info--currency"
            onInput={(e) => setCourse({ ...course, currency: e.target.value })}
            placeholder="Currency"
          ></input>
        </div>

        <div className="add-course__info">
          <p className="add-course__info--label">Price:</p>
          <input
            className="add-course__info--price"
            onInput={(e) => setCourse({ ...course, price: e.target.value })}
            placeholder="Price of the Course "
          ></input>
        </div>
        <div className="add-course__info">
          <p className="add-course__info--label">Duration:</p>
          <input
            className="add-course__info--duration"
            onInput={(e) => setCourse({ ...course, duration: e.target.value })}
            placeholder="Duration of the Course"
          ></input>
        </div>

        <div className="add-course__info">
          <p className="add-course__info--label">Summary:</p>
          <textarea
            row="5"
            columns="30"
            className="add-course__info--summary"
            onInput={(e) => setCourse({ ...course, summary: e.target.value })}
            placeholder="Add a Course Summary"
          ></textarea>
        </div>

        <div className="add-course__confirm">
          <button
            className="add-course__confirm--save"
            data-testid="create-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;

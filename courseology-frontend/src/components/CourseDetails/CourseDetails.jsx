import "./CourseDetails.scss";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  const url = "http://localhost:8080/course/" + id;
  const [course, setCourseById] = useState([]);

  const getCourseById = async () => {
    let urlParam = url;
    const response = await fetch(urlParam);
    const data = await response.json();
    setCourseById(data);
    console.log("Hi Blanche... here is your course from the API");
    console.log(data);
  };

  useEffect(() => {
    getCourseById();
  }, []);

  return (
    <div className="course-details">
      <div>
        <Header />
      </div>
      <div className="course-details__header">
        <textarea
          rows="3"
          cols="35"
          disabled="disabled"
          id={id}
          value={course.name}
          className="course-details__header--info"
        ></textarea>
      </div>
      <div className="course-details__main">
        <div className="course-details__main--likes">
          <LikeButton />
        </div>
        <div className="course-details__info">
          <p className="course-details__info--label">Location:</p>
          <textarea
            rows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.location}
            className="course-details__info--location"
          ></textarea>
        </div>
        <div className="course-details__info">
          <p className="course-details__info--label">Price:</p>
          <textarea
            rows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.currency + course.price}
            className="course-details__info--price"
          ></textarea>
        </div>
        <div className="course-details__info">
          <p className="course-details__info--label">Duration:</p>
          <textarea
            rows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.duration}
            className="course-details__info--duration"
          ></textarea>
        </div>
        <div className="course-details__info">
          <p className="course-details__info--label">Summary:</p>
          <textarea
            rows="10"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.summary}
            className="course-details__info--summary"
          ></textarea>
        </div>

        <Link to={`/`} className="course-details__confirm">
          <button
            className="course-details__confirm--back"
            data-testid="course-button"
            type="button"
          >
            Back to Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;

import { Link } from "react-router-dom";

import "./Courses.scss";

const Courses = ({ courses }) => {
  return (
    <div className="course">
      {courses.map((course, id) => {
        return (
          <Link
            to={`/course/` + (id + 1)}
            className="course-section"
            key={course + id}
          >
            <h2 className="course-section__company">{course.company}</h2>
            <h3 className="course-section__title">{course.name}</h3>
            <p className="course-section__duration">{course.duration}</p>
            <p className="course-section__location">{course.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Courses;

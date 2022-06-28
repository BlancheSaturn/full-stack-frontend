import "./MainSection.scss";
import React, { useState, useEffect } from "react";
import Courses from "../../components/Courses/Courses";
import Search from "../../components/Search/Search";

const MainSection = () => {
  const url = "http://localhost:8080/courses";
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getCourses(courses, searchTerm);
  }, [courses, searchTerm]);

  const getCourses = async () => {
    let finalUrl = url;
    const response = await fetch(finalUrl);
    const data = await response.json();
    setCourses(data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const courseNameLower = course.name.toLowerCase();
    const searchTermLower = searchTerm.toLocaleLowerCase();

    if (courseNameLower.includes(searchTermLower)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="main-section">
      <div className="main-section__search">
        <Search
          className="main-section__search--courses"
          handleInput={handleInput}
        />
      </div>
      <div className="main-section__courses">
        {courses && (
          <Courses
            className="main-section__courses-card"
            courses={filteredCourses}
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;

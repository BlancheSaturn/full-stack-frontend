import "./App.scss";
import MainScreen from "./containers/MainScreen/MainScreen";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import AddCourse from "./components/AddCourse/AddCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import LikeButton from "./components/LikeButton/LikeButton";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/course/:id" element={<CourseDetails />}></Route>
          <Route path="/add-course" element={<AddCourse />}></Route>
          <Route
            path="/notification"
            element={<NotificationContainer />}
          ></Route>
          <Route path="/like-button" element={<LikeButton />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

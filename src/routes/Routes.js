import { Routes as RouteWrapper, Route } from "react-router-dom";
import Root from "../layouts/Root";
import Courses from "../pages/courses";
import Content from "../pages/courses/Content";
import Home from "../pages/home";
import Login from "../pages/login";
import PageNotFound from "../pages/page-not-found";
import Register from "../pages/register";
import Course from "../pages/courses/Course";
import Checkout from "../pages/checkout";
import PrivateRoute from "./private-route";

const Routes = () => {
  return (
    <>
      <RouteWrapper>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="courses/" element={<Courses />}>
            <Route path="all" element={<Content />} />
            <Route path=":id" element={<Course />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout/:courseID" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route></Route>
        </Route>
      </RouteWrapper>
    </>
  );
};

export default Routes;

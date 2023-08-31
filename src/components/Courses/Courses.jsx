import React, { useContext, useEffect } from "react";
import { Card, Button } from "antd";
import "./Courses.scss";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";

const Courses = () => {
  const { getCourses, courses, addCart, cart } = useContext(CoursesContext);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="courses-container">
      {courses.map((course) => {
        return (
          <Card
          key={course.id}
          title={course.name}
          bordered={false}
          style={{
            width: 300,
            border: "3px solid",
            borderColor: "black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.eHZ_nlRQjFxozCsvKfZjNwHaEK?pid=ImgDet&rs=1"
            alt="Course image"
            style={{ width: "100%", height: "auto", image: "cover" }}
          />
          <div>
            <p>{course.description}</p>
            <p>{course.company}</p>
                <Button className="login-button" type="primary" htmlType="submit">Price: {course.price} €</Button>
            <Button className="button" onClick={() => addCart(course)}>
              Add to cart
            </Button>
          </div>
        </Card>
      );
    })}
  </div>
  );
};

export default Courses;


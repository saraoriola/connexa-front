import React, { useContext, useEffect } from "react";
import { Card } from "antd";
import "./Courses.scss";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";

const Courses = () => {
  const { getCourses, courses } = useContext(CoursesContext);

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
              border: "1px solid",
              borderColor: "yellow",
            }}
          >
            <p>{course.price} €</p>
            <button onClick={() => addCart(course)}>Add cart</button>
          </Card>
        );
      })}
    </div>
  );
};

export default Courses;

import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import NewCourse from './NewCourse';
import {
    openNewCourseModal,
    closeNewCourseModal
 } from '../../redux/courses/courseAction';
import Modal from 'react-modal';
import './CourseListPage.css'

const CourseListPage = ({
    courses,
    coursesLoading,
    coursesError,
    isModalOpen,
    openNewCourseModal,
    closeNewCourseModal
}) => { 
    if (coursesLoading) {
        return <div className="text-center">
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    }
    if (coursesError) {
        return <div className="text-center text-danger">Error :( {coursesError.message}</div>
    }

    return courses.length === 0 ? (
        <div className="CreateCourse">
            <NewCourse />
        </div>
    ) : (
            <div className="CourseList container">
                <h1>Your Courses</h1>
                <button
                    className="new-course-btn"
                    onClick={openNewCourseModal}
                >
                    New Course
                </button>
                <ul>
                    {
                        courses.map(course => (
                            <li key={course.id}>
                                <Link to={`/courses/${course.id}`}>
                                    <div className="title">{course.name}</div>
                                    <div className="price">
                                        ${course.price}.00
                                    </div>
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeNewCourseModal}
                >
                    <NewCourse />
                </Modal>
            </div>
        );
}

const mapState = state => ({
    courses: state.courses.courses,
    coursesError: state.courses.coursesError,
    coursesLoading: state.courses.coursesLoading,
    isModalOpen: state.courses.newCourseModalOpen
})

const mapDispatch = {
    openNewCourseModal,
    closeNewCourseModal
}

export default connect(mapState, mapDispatch)(CourseListPage);

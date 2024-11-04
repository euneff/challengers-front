// src/components/CourseList.js
import React from 'react';
import Card from './Card';
import './CardList.scss';

const courseData = [
  { tag: '운동', title: '야호', step :'진행중' , entryFee:'10,000원'},
  { tag: '공부', title: '야아호', step:'진행중' },
  { tag: '적금', title: '중간' },
  { tag: '운동', title: '발표'},
  { tag: '운동', title: '기연프'},
  { tag: '운동', title: '프로젝트' },
];

const CardList = () => (
  <div className="course-list">
    {courseData.map((course, index) => (
      <Card
        key={index}
        tag={course.tag}
        title={course.title}
        step={course.step}
        entryFee={course.entryFee}
     
      />
    ))}
  </div>
);


export default CardList;

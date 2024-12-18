import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteWishlist, getWishlist } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import CourseItem from '../components/CourseItem';
import Warn from '../components/Warn';
import closeButton from '../assets/closeButton.svg';
import styles from './WishlistPage.module.css';

function WishlistPage() {
  const [courses, setCourses] = useState([]);

  /*
  const handleDelete = (courseSlug) => {
    deleteWishlist(courseSlug);
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  }; 

  useEffect(() => {
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  }, []);
  */
  return (
    <Container className={styles.container}>

        <>
          <Warn
            className={styles.emptyList}
            title="담아 놓은 도전이 없어요."
            description="나에게 필요한 도전을 찾아보세요."
          />
          <div className={styles.link}>
            <Link to="/challenge">
              <Button as="div">도전 찾아보기</Button>
            </Link>
          </div>
        </>
      ) : (
        <ul className={styles.items}>
          {courses.map((course) => (
            <li key={course.slug} className={styles.item}>
              <CourseItem course={course} />
              <img
                className={styles.delete}
                src={closeButton}
                alt="닫기"
                //onClick={() => handleDelete(course.slug)}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default WishlistPage;

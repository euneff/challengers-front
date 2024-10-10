import { useState } from 'react';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import CourseItem from '../components/CourseItem';
import styles from './CourseListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function CourseListPage() {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <ListPage
      variant="catalog"
      title="모든 도전"
      description="직접 도전을 신청하세요."
    >
      <form className={searchBarStyles.form}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 도전 찾기"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 0개 코스</p>

    </ListPage>
  );
}

export default CourseListPage;

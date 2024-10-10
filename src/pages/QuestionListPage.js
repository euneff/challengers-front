import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../api';
import DateText from '../components/DateText';
import ListPage from '../components/ListPage';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import styles from './QuestionListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function QuestionItem({ question }) {
  return (
    <Card className={styles.questionItem} key={question.title}>
      <div className={styles.info}>
        <p className={styles.title}>
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        
        </p>
        <p className={styles.date}>
          <DateText value={question.createdAt} />
        </p>
      </div>
      <div className={styles.writer}>
        <Avatar
          photo={question.writer.profile.photo}
          name={question.writer.name}
        />
      </div>
    </Card>
  );
}

function QuestionListPage() {
  const [keyword, setKeyword] = useState('');
  const questions = getQuestions();

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <ListPage
      variant="community"
      title="커뮤니티"
      description="오늘도 성공을 향하여!"
    >
      <form className={searchBarStyles.form}>
        <input
          name="keyword"
          value={keyword}
          placeholder="검색으로 질문 찾기"
          onChange={handleKeywordChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

  
    </ListPage>
  );
}

export default QuestionListPage;

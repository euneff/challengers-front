import Button from '../components/Button';
import Container from '../components/Container';
import Lined from '../components/Lined';
import styles from './HomePage.module.css';
import landingImg from '../assets/landing.svg';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <Lined>도전을 성공하면 보상금이?!</Lined>
            <br />
            <strong>도전자들</strong>
          </h1>
          <p className={styles.description}>
            뿌듯함과 성취감 뿐만아니라
            보상금까지 !!!
          </p>
          <div>
            <Button>지금 도전하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
    </>
  );
}

export default HomePage;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

function Mypage() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  // 예시 도전 목록 - 실제 데이터는 API로 가져올 수 있습니다)
  const challenges = [
    { id: 1, title: '도전 1' },
    { id: 2, title: '도전 2' },
    { id: 3, title: '도전 3' },
  ];

  const handleViewChallenge = (challenge) => {
    setRecentlyViewed((prev) => [...prev, challenge]);
  };

  const toggleRecentlyViewed = () => {
    setShowRecentlyViewed(!showRecentlyViewed);
  };
  return (
    
    <div className="mypage">
      <div className="grayWrapper">
        <div className="grayLeft">
          <p>
            안녕하세요
            <br />
            오늘도 <span className="textBrown">도전 </span> 하는당신 <br/>정말 멋지네요 .
          </p>
          <button className="buttonStyle">SIMPLE 회원</button>
        </div>
        <div className="grayRight">
          <div className="grayRightTop">
            <div className="grayRightTopFirst">
              <span>포인트 적립 </span>
              <Link className="linkStyle" to="#">
                0원
              </Link>
            </div>
            <div className="grayRightTopSecond" to="#">
              <span>포인트 충전 / 환전</span>
              <Link className="linkStyle">point</Link>
            </div>
          </div>
          <div className="grayRightThird">
            <p>성공한 도전 내역</p>
            <Link className="linkStyle" to="#">
              0개
            </Link>
          </div>
        </div>
      </div>
      <div className="whiteWrapper">
        <div className="whiteInner">
          <div className="whiteLeft">
            <p className="title">마이페이지</p>
            <div className="boxList">
              <button className="boxLists">정보수정</button>
              <button className="boxLists" onClick={toggleRecentlyViewed}>최근 본 도전</button>
              <button className="boxLists">고객센터</button>
              <button className="boxLists">회원탈퇴</button>
            </div>
          </div>
          <div className="whiteRight">
            <div className="orderStatus">
              <p>
                도전 현황<span>(현재 진행 중인 도전)</span>
              </p>
              <button>지난 도전 </button>
            </div>
            <div className="blankPage" />
          </div>
        </div>
      </div>
      
      {/* 최근 본 도전 목록 표시 */}
      {showRecentlyViewed && (
        <div className="recentlyViewed">
          <h3> 최근 본 도전 목록 </h3>
          {recentlyViewed.length > 0 ?(
            recentlyViewed.map((challenge)=>(
              <div key = {challenge.id}>
                <p>{challenge.title}</p>
              </div>
            ))
          ) : (
            <p>최근 본 도전이 없습니다.</p>
          )}
          </div>
      )}
    </div>
  );
}
export default Mypage;
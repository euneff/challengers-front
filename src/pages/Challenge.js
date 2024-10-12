import React, { useState } from 'react';
import './Challenge.css'; // 스타일을 위한 CSS 파일

const CommunityForm = () => {
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    status: '진행 중',
    reward: '',
    participants: []
  });

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChallenge({ ...newChallenge, [name]: value });
  };

  // 챌린지 추가 핸들러
  const handleAddChallenge = () => {
    if (newChallenge.title.trim() && newChallenge.reward.trim()) {
      setChallenges([...challenges, { ...newChallenge, id: challenges.length + 1 }]);
      setNewChallenge({ title: '', status: '진행 중', reward: '', participants: [] });
    }
  };

  // 챌린지 삭제 핸들러
  const handleDeleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <div className="community">
      <h1>챌린지 목록</h1>

      {/* 챌린지 목록 그리드 */}
      <div className="challenge-grid">
        {challenges.length > 0 ? (
          challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <h2>{challenge.title}</h2>
              <p>상태: {challenge.status}</p>
              <p>보상: {challenge.reward}</p>
              <button onClick={() => handleDeleteChallenge(challenge.id)}>삭제</button>
            </div>
          ))
        ) : (
          <p>등록된 챌린지가 없습니다.</p>
        )}
      </div>

      {/* 새로운 챌린지 추가 */}
      <div className="add-challenge">
        <h2>새로운 챌린지 추가</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>챌린지 제목:</label>
            <input
              type="text"
              name="title"
              placeholder="챌린지 제목"
              value={newChallenge.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>상태:</label>
            <select name="status" value={newChallenge.status} onChange={handleInputChange}>
              <option value="모집 중">모집 중</option>
              <option value="진행 중">진행 중</option>
              <option value="종료">종료</option>
            </select>
          </div>

          <div>
            <label>참가비:</label>
            <input
              type="text"
              name="reward"
              placeholder="참가비"
              value={newChallenge.reward}
              onChange={handleInputChange}
              required
            />
          </div>

          <button onClick={handleAddChallenge}>챌린지 추가</button>
        </form>
      </div>
    </div>
  );
};

export default CommunityForm;
import React, { useState } from 'react';

const Challenge = () => {
  const [challenges, setChallenges] = useState([]); // 챌린지 목록
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    status: '진행 중',
    reward: '',
    participants: []
  }); // 새로운 챌린지 입력 상태

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChallenge({ ...newChallenge, [name]: value });
  };

  // 챌린지 추가 핸들러
  const handleAddChallenge = () => {
    if (newChallenge.title.trim() && newChallenge.reward.trim()) {
      setChallenges([...challenges, { ...newChallenge, id: challenges.length + 1 }]);
      setNewChallenge({ title: '', status: '진행 중', reward: '', participants: [] }); // 입력 초기화
    }
  };

  return (
    <div className="community">
      <h1>챌린지 목록</h1>

      {/* 챌린지 목록 표시 */}
      {challenges.length > 0 ? (
        challenges.map((challenge) => (
          <div key={challenge.id} className="challenge">
            <h2>{challenge.title}</h2>
            <p>상태: {challenge.status}</p>
            <p>보상: {challenge.reward}</p>

            {/* 참가자 목록 */}
            <h3>참가자 순위</h3>
            <ul>
              {challenge.participants.length > 0 ? (
                challenge.participants.map((participant, index) => (
                  <li key={index}>
                    {participant.rank}위: {participant.name}
                  </li>
                ))
              ) : (
                <li>참가자가 없습니다.</li>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p>등록된 챌린지가 없습니다.</p>
      )}

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
              <option value="진행 중">진행 중</option>
              <option value="종료">종료</option>
            </select>
          </div>

          <div>
            <label>보상:</label>
            <input
              type="text"
              name="reward"
              placeholder="챌린지 보상"
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

export default Challenge;
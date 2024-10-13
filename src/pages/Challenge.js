import React, { useState } from 'react';
import './Challenge.css'; // 스타일을 위한 CSS 파일

const CommunityForm = () => {
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    status: '진행 중',
    reward: '',
    content: '',
    participants: [],
  });

  const [selectedChallenge, setSelectedChallenge] = useState(null); // 선택된 챌린지
  const [showModal, setShowModal] = useState(false); // 상세 모달 표시 여부
  const [showParticipants, setShowParticipants] = useState(false); // 참가자 현황 표시 여부

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChallenge({ ...newChallenge, [name]: value });
  };

  // 챌린지 추가 핸들러
  const handleAddChallenge = () => {
    if (newChallenge.title.trim() && newChallenge.reward.trim()) {
      setChallenges([
        ...challenges,
        { ...newChallenge, id: challenges.length + 1 },
      ]);
      setNewChallenge({
        title: '',
        status: '진행 중',
        reward: '',
        content: '',
        participants: [],
      });
    }
  };

  // 챌린지 삭제 핸들러
  const handleDeleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  // 챌린지 클릭 핸들러
  const handleCardClick = (challenge) => {
    setSelectedChallenge(challenge);
    setShowModal(true);
  };

  // 상세 모달 닫기 -> 참가자 현황 열기
  const closeModal = () => {
    setShowModal(false);
    setShowParticipants(true); // 참가자 현황 표시
  };

  // 참가자 현황 폼 닫기
  const closeParticipants = () => {
    setShowParticipants(false);
    setSelectedChallenge(null); // 선택된 챌린지 초기화
  };

  return (
    <div className="community">
      <h1>도전 목록</h1>

      {/* 챌린지 목록 그리드 */}
      <div className="challenge-grid">
        {challenges.length > 0 ? (
          challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="challenge-card"
              onClick={() => handleCardClick(challenge)} // 카드 클릭 시 상세 정보 모달 열기
            >
              <h2>{challenge.title}</h2>
              <p>상태: {challenge.status}</p>
              <p>보증금: {challenge.reward}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteChallenge(challenge.id);
                }}
              >
                삭제
              </button>
            </div>
          ))
        ) : (
          <p>등록된 도전이 없습니다.</p>
        )}
      </div>

      {/* 새로운 챌린지 추가 */}
      <div className="add-challenge">
        <h2>새로운 도전 추가</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>도전 제목:</label>
            <input
              type="text"
              name="title"
              placeholder="도전 제목"
              value={newChallenge.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>상태:</label>
            <select
              name="status"
              value={newChallenge.status}
              onChange={handleInputChange}
            >
              <option value="모집 중">모집 중</option>
              <option value="진행 중">진행 중</option>
              <option value="종료">종료</option>
            </select>
          </div>

          <div>
            <label>도전 상세 내용:</label>
            <input
              type="text"
              name="content"
              placeholder="상세내용"
              value={newChallenge.content}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>보증금:</label>
            <input
              type="text"
              name="reward"
              placeholder="보증금"
              value={newChallenge.reward}
              onChange={handleInputChange}
              required
            />
          </div>

          <button onClick={handleAddChallenge}>챌린지 추가</button>
        </form>
      </div>

      {/* 모달 - 챌린지 상세 정보 */}
      {showModal && selectedChallenge && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedChallenge.title}</h2>
            <p>상태: {selectedChallenge.status}</p>
            <p>보증금: {selectedChallenge.reward}</p>
            <button onClick={closeModal}>신청하기</button>
          </div>
        </div>
      )}

      {/* 참가자 현황 폼 */}
      {showParticipants && selectedChallenge && (
        <div className="participants-form">
          <h2>{selectedChallenge.title} 참가자 현황</h2>
          {selectedChallenge.participants.length > 0 ? (
            <ul>
              {selectedChallenge.participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ul>
          ) : (
            <p>참가자가 없습니다.</p>
          )}
          <button onClick={closeParticipants}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default CommunityForm;

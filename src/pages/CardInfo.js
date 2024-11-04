import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardInfo = () => {
  const navigate = useNavigate();
  // 챌린지 상태 및 참가자 데이터
  const [currentStep, setCurrentStep] = useState(5); // 
  const participants = [
    { name: '참가자 1', status: '성공' },
    { name: '참가자 2', status: '심사중' },
    { name: '참가자 3', status: '실패' },
    { name: '참가자 4', status: '심사중' },
    { name: '참가자 5', status: '미제출' },
    { name: '참가자 6', status: '미제출' },
  ];

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="card-info">
      <h2>챌린지 진행 정보</h2>
      <p>야아아ㅏ아아아아아호</p>

      {/* 진행 단계 */} 
      <div className="steps">
        <h3> 도전단계 </h3>
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            className={`step-button ${currentStep === step ? 'active' : ''}`}
            onClick={() => handleStepClick(step)}
          >
            {step}
          </button>
        ))}
      </div>

      {/* 참가자 현황 */}
      <div className="participants">
        <h3>참가자 현황 (단계 {currentStep})</h3>
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant.name} - {participant.status}
            </li>
          ))}
        </ul>
      </div>
      <button className="applybutton" onClick={()=>navigate('/enroll')}> 도전 신청하기 </button>
    </div>
  );
};

export default CardInfo;
import React, { useState } from 'react';


const Enroll = () => {
  const [title, setTitle] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [authFrequency, setAuthFrequency] = useState('주');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출 처리 로직
    console.log({
      title,
      entryFee,
      authFrequency,
      startDate,
      endDate,
    });
    alert('신청이 완료되었습니다.');
  };

  

  return (
    <div className="challenge-form">
      <h2>도전 신청하기</h2>
      <form onSubmit={handleSubmit}>
        {/* 도전 제목 */}
        <div className="form-group">
          <label>도전 제목:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* 참가비 */}
        <div className="form-group">
          <label>참가비:</label>
          <input
            type="text"
            value={entryFee}
            onChange={(e) => setEntryFee(e.target.value)}
            required
          />
        </div>

        {/* 인증 방식 설정 */}
        <div className="form-group">
          <label>인증 방식 설정:</label>
          <select
            value={authFrequency}
            onChange={(e) => setAuthFrequency(e.target.value)}
            required
          >
            <option value="주">주</option>
            <option value="월">월</option>
          </select>
        </div>

        {/* 도전 기간 설정 */}
        <div className="form-group">
          <label>도전 시작 날짜:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>도전 종료 날짜:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">도전 신청</button>
      </form>
    </div>
  );
};

export default Enroll;
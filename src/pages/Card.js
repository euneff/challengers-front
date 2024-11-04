import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';


const Card = ({ tag, title, step }) => {

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <span className={`tag ${tag === '무료공개' ? 'free' : 'best'}`}>{tag}</span>
        <span className="category">{step}</span>
      </div>
      <h2 className="card-title">{title}</h2>
      <div className="card-info">
        <div className="info-item"> 성공까지 D-''일 </div>
        <div className="info-item"> </div>
      </div>
      <button className="play-button" onClick={()=>navigate('/cardinfo')}>상세정보</button>
    </div>
  );
};

export default Card;
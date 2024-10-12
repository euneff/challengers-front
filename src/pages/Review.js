
import React ,{useState} from 'react';

function Review(){

  // 도전이름 입력창 상태
  const [firstName, setFirstName] = useState();

  // 소감 입력창 상태
  const [secondName, setSecondName] = useState();

  // 보상금 입력창 상태
  const [money, setMoney] = useState();
 
  // 리뷰 리스트 상태
  const [rList, setrList] = useState([]);
 

  return(
    <div className='wrap'>
      <div>
        <span>도전이름:</span><input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
      </div>
      <div>
        <span> 성공자가 된 소감을 말씀해주세요.</span><input type="text" value={secondName} onChange={(e)=>{setSecondName(e.target.value)}}></input>
      </div>
      <div>
        <span>보상금을 어디에 쓰실건가요 ?</span><input type="text" value={money} onChange={(e)=>{setMoney(e.target.value)}}></input>
      </div>
      <button>리뷰 추가</button>
      <p>{`<리뷰 명단>`}</p>
      <ul>
        {rList.map((review)=>{
          return <div key={review.id}>
          <li>{`id: ${review.id} ${review.firstName} ${review.sacondName} (${review.money})`}</li>
          <button>수정</button>
          <button>삭제</button>
          </div>
          })}
      </ul>
    </div>
  )
}


export default Review;
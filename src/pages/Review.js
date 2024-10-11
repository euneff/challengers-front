import React from 'react';

function Review(){
  return(
    <div>
      <div>
        제목
        <input type='text'/>
      </div>
      <div>
        도전 이름
        <textarea></textarea>
      </div>
      <div>
        도전을 이루기 위해 어떤 노력을 하였나요?
        <textarea></textarea>
      </div>
      <div>
        보상금은 어떻게 사용하실건가요?
        <textarea></textarea>
      </div>
      <button >
        등록하기
      </button>
      
    </div>
    

  )
}

export default Review;
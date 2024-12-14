import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Friends from './Friends';

function App() {
  const [isStart, setIsStart] = useState(false);
  
  return (
    <div className="background">
      <div className="center">
        <h1>{isStart ? "잠깐, 심심하지 않게 같이 플레이할 친구를 추천해드려요" : "게임을 시작하려면 아래 버튼을 클릭하세요"}</h1>
        <div className="start_btn_area">
          {isStart
            ? 
              <div>
                <Friends/>
                <button onClick={()=>{setIsStart(false)}}>처음으로 돌아가기</button>
              </div>
            : <button onClick={()=>{setIsStart(true)}} className="start-btn">START</button>
          }

        </div>
      </div>
    </div>
  );
}

export default App;

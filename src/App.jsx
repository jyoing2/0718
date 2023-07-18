import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, DarkSetMode] = useState(false);

  const handleDarkModeToggle = () => {
    DarkSetMode(!darkMode);
  };

  let totalBackgroundColor = darkMode ? '#000000' : 'rgb(230, 230, 230)';
  let totalClassName = darkMode ? 'dark-mode' : '';

  return (
    <div id="total" className={totalClassName + (darkMode ? ' dark-mode' : '')} style={{ backgroundColor: totalBackgroundColor }}>
      <div className={`top ${totalClassName}`}>
        <div className={`velog ${totalClassName}`}>velog</div>
        <div className='icon' onClick={handleDarkModeToggle}>
          <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </div>
        <div className='icon'><i className="fas fa-search"></i></div>
        <div className='login'>로그인</div>
      </div>

      <div className={`category ${totalClassName}`}>
        <i className="fas fa-chart-line"></i> 트렌드
      </div>

      <div className="bar">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post() {
  const [제목, 제목변경]= useState(['제목없음']);
  const [본문, 본문변경] = useState(['내용없음']);
  const [날짜, 날짜변경] = useState(['날짜미상']);
  const [좋아요, 좋아요변경] = useState(0);

  let link = './posting.jsx'

  return (
    <>
      <div className="post">
        <div className="img">이미지</div>
        <div className="title">{제목}</div>
        <div className="info">{본문}</div>
        <div className="date">{날짜}</div>
        <hr />
        <div className='user'>유저
          <div className="like">
            <span onClick={() => { 좋아요변경(좋아요 + 1) }}>♥</span> {좋아요}
          </div>
        </div>
        </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import './posting.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, DarkSetMode] = useState(false);
  const [좋아요, 좋아요변경] = useState(0);

  const handleDarkModeToggle = () => {
    DarkSetMode(!darkMode);
  };

  let totalBackgroundColor = darkMode ? '#000000' : 'rgb(230, 230, 230)';
  let totalClassName = darkMode ? 'dark-mode' : '';

  return (
    <div id="total" style={{ backgroundColor: totalBackgroundColor }}>
      <div className={`top ${totalClassName}`}>
        <div className={`velog ${totalClassName}`}>velog</div>
        <div className='icon' onClick={handleDarkModeToggle}>
          <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i> 
        </div>
        <div className='icon'><i className="fas fa-search"></i></div>
        <div className='login'>로그인</div>
      </div>
      <div className="bar">
      <div className='sidebtn'>
      <div className="like">
            <span onClick={() => { 좋아요변경(좋아요 + 1) }}>♥</span> {좋아요}
        </div><i class="fas fa-share-alt"></i></div>
        <Post />
      </div>
    </div>
  );
}

function Post() {
  const [제목, 제목변경]= useState(['제목없음']);
  const [본문, 본문변경] = useState(['내용없음']);
  const [날짜, 날짜변경] = useState(['날짜미상']);

  let link = './posting.jsx'

  return (
    <>
      <div className="post">
        <div className="title">{제목}</div>
        <div className='user'>유저
        <div className="date">{날짜}
        </div></div>
        <div className="img">이미지</div>
        <div className="info">{본문}</div>
        </div>
    </>
  );
}

export default App;

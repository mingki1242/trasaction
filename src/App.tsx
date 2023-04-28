import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <div className="board_wrap">
        <div className = "board_title">
          <strong>게시글 작성</strong>
          <p>판매자는 우측 하단 게시글 작성 버튼을 눌러 판매 등록을 할 수 있습니다.</p>
        </div>
          <div className="border_list_wrap">
              <div className="board_list">
                  <div className="top">
                      <div className="num">번호</div>
                      <div className="title">제목</div>
                      <div className="writer">글쓴이</div>
                      <div className="date">작성일</div>
                      <div className="count">조회</div>
                  </div>
                  <div>
                      <div className="num">5</div>
                      <div className="title"><a href = "#">글 제목</a></div>
                      <div className="writer">박민기</div>
                      <div className="date">2023.04.28</div>
                      <div className="count">33</div>
                  </div>
                  <div>
                      <div className="num">4</div>
                      <div className="title"><a href = "#">글 제목</a></div>
                      <div className="writer">박민기</div>
                      <div className="date">2023.04.28</div>
                      <div className="count">33</div>
                  </div>
                  <div>
                      <div className="num">3</div>
                      <div className="title"><a href = "#">글 제목</a></div>
                      <div className="writer">박민기</div>
                      <div className="date">2023.04.28</div>
                      <div className="count">33</div>
                  </div>
                  <div>
                      <div className="num">2</div>
                      <div className="title"><a href = "#">글 제목</a></div>
                      <div className="writer">박민기</div>
                      <div className="date">2023.04.28</div>
                      <div className="count">33</div>
                  </div>
                  <div>
                      <div className="num">1</div>
                      <div className="title"><a href = "#">글 제목</a></div>
                      <div className="writer">박민기</div>
                      <div className="date">2023.04.28</div>
                      <div className="count">33</div>
                  </div>

              </div>
              <div className="board_page">
                  <a href="#" className = "bt first"><b>〈〈</b></a>
                  <a href="#" className = "bt prev"><b>〈</b></a>
                  <a href="#" className = "num on">1</a>
                  <a href="#" className = "num">2</a>
                  <a href="#" className = "num">3</a>
                  <a href="#" className = "num">4</a>
                  <a href="#" className = "num">5</a>
                  <a href="#" className = "bt next"><b>〉</b></a>
                  <a href="#" className = "bt last"><b>〉〉</b></a>
              </div>
              <div className="bt_wrap">
                  <a href = "#" className = "on">등록</a>
              </div>
          </div>
      </div>
  );
}

export default App;

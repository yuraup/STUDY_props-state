import React, { useState } from 'react';


function Message() {
  const [message, setMessage] = useState("노는 게 젤 좋아");

  // 가사 A가 아닐 땐 B로, B가 아닐 땐 다시 A로.
  const handleClick = () => {
    const newMessage = message === "노는 게 젤 좋아" ? "친구들 모여라~" : "노는 게 젤 좋아";
    setMessage(newMessage);
  };

  return (
    <>
      <h1 className="message">{message}</h1>
      <button onClick={handleClick}>가사 바꾸기</button>
    </>
  );
}

export default Message;
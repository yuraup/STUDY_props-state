import React from 'react';

function MyName(props) {
  return <div>안녕? 나는 {props.name}라고 해!</div>
}

export default MyName;

//App.js 에서 name="뽀로로"라는 값을 자식에게 넘겨줌.
//자식 컴포넌트는 {props.name} 으로 값을 받아옴.
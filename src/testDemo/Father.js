import React from 'react';

const Child = (props) => {
  return (
    <>
      <div style={{ border: '1px solid red' }}>
        子组件
        <br />
        <span>
          {props.spanV}
          <br />
        </span>
        <p>{props.pV}</p>
      </div>
    </>
  );
};

const Father = () => {
  return (
    <>
      <Child {...{ spanV: 'spanValue', pV: 'pVallue' }}></Child>
    </>
  );
};

export default Father;

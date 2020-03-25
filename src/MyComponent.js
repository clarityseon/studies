import React from 'react';
import PropTypes from 'prop-types';

const MyComponent=( {name,children}) =>{
   
    return (<div> 안녕하세요, 제이름은 {name} 입니다.children 값은 {children}입니다.</div>)
};
MyComponent.defaultProps ={
    name:'기본 이름'
};

MyComponent.PropTypes={
    name:PropTypes.string
};
export default MyComponent;
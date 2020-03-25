import React,{Component} from 'react';

class Counter extends Component{
    /*
    // 컴포넌트 설정시 constructor 함수 사용
    constructor(props){
        //constructor 함수 사용시 반드시 super 호출
        super(props);
        //state 초깃값 설정
        this.state={number:0 , fixedNumber:0}
    }
*/
    state = {number:0 , fixedNumber:0}
    
    render(){
       const {number, fixedNumber}=this.state;
       return(
           <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button onClick={() =>{this.setState({number: number+1})}} >+1</button>
           </div>
           
       )

    }

}

export default Counter;
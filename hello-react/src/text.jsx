// import React from 'react';

// const text = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default text;

// import React, { Component } from 'react';

// class text extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default text;


// jsx사용하기전 일반 스크립트로 똑같은 기능을 구현시 문법 비교 
function test(){
    return React.createElement("div,null","Hello"
    React.createElement("b",null,"react"))
}

//jsx 
function test2(){
    return (
        <div>
        Hello, <b>react</b>

        </div>
    )
}
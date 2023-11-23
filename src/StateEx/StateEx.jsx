// import { Component } from "react";

// class StateEx extends Component {
//     constructor() {
//         super()

//         this.state = {
//             name : 'om'
//         }
//     }

//     render() {
//         return (
//             <h1>Helloww.....{this.state.name}</h1>
//         );
//     }
// }


import { Component, useState } from "react";

function StateEx() {
    const [name, setName] = useState('om');

    return (
        <h1>Helloww.....{name}</h1>
    );
}
export default StateEx
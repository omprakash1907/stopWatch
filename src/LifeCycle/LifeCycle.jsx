import { Component } from "react";

export default class LifeCycle extends Component {
    constructor() {
        super()
        console.log('Intialization....')                //Intialize
        this.state = {
            count: 0
        }
    }
    upadte(){
        this.setState({count : this.state.count + 1})
        console.log('Update...')                        //Update
    }
    render() {
        console.log('Componet Render.....')             //Render
        return <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>this.upadte()}>Increment</button>
        </>
    }
    componentDidMount(){
        console.log('Component Did Mount..')           //After Rendering
    }

    componentWillUnmount(){
        console.log('component Will Unmount..')       //Before Removing From DOM
    }
}
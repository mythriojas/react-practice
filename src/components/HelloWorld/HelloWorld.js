const { Component } = require("react");

class HelloWorld extends Component{
render(){
    return (
        <div>
            <div>{this.props.text} </div>
            <div>{this.props.text2} </div>
        </div>
    )
}
}
export default HelloWorld;
import React,{Component} from 'react'

class ButtonClickEvent extends Component{

    BtnClick(params) {
        alert("Click Button Working On Class Component.")
    }
    render() {
        return (
        <button onClick={this.BtnClick}>Click Me</button>
        )
    }
        
    

}

export default ButtonClickEvent
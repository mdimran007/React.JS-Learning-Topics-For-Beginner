import React from 'react'

function BtnClick(params) {
  alert("Click Button Working On Functional Component.")
}

function ButtonClickEvent() {
    return(
    <button onClick={BtnClick}>Click Me</button>
    )
}

export default ButtonClickEvent
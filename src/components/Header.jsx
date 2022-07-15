import React from 'react'


function Header({bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }


  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>Feedback UI</h2>
            

        </div>
    </header>
  )
}

Header.defaultProps = {
    bgColor: "brown",
    textColor: "white"
}



export default Header
import React from 'react'

function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )

return (
    <div className="card"> 
        {children}
    </div>
    
    // <div className="card" style={{
    //     backgroundColor: reverse ? "yellow" : "black",
    //     color: reverse ? "red" : "green"
    // }}>
        
   
)

}

export default Card
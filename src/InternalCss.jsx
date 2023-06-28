import React from 'react'

function InternalCss() {
    const headerStyle={
        backgroundColor:"blue",
        color:"black"
    }
    const contentStyle={
        backgroundColor:"blue",
        color:"black"
    }
  return (
    <div>
        <header style={headerStyle}>
            <h1>My website</h1>
            </header>
            <main style={contentStyle}>
              <h2>about me</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odio tempore tenetur. Modi, dolore cupiditate?
              </p>

            </main>


        
    </div>
  )
}

export default InternalCss
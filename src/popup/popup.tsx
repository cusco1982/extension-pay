import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div style={{height:"500px", textAlign:"center", marginTop:"150px"}}>





      <h1 style={{ width: "400px" }}>ExtensionPay.com Sample Extension</h1>
      <p style={{ fontSize: "1.2rem" }}>User hasn't paid :(</p>
      <button>Pay now</button>




    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)

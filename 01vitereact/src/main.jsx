import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
function MyApp(){
    return(
        <p>Visit my app!!</p>
    )
}
*/

/*
const AnotherElement = (
    <a href = 'https://www.google.com'  target = '_blank'>visit google </a>
)
*/
/*
const username = "bheemmm"
const reactElement = React.createElement(
    'a',
    {href : 'https://www.google.com',target : '_blank'},
    'click me to visit google',
    username // yha pr sirf evaluate expression de skte h i.e. final value

)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  
 <App/>
  
)

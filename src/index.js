import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import DetailPage from './Pages/detail'
import * as serviceWorker from './serviceWorker';

// const Child = ({ match }) => (
//     <div>
//       <h3>ID: {match.params.id}</h3>
//     </div>
//   )

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/detail/:id" component={DetailPage} />
    </div>
    {/* <Route path="/:id" component={Child}/> */}

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
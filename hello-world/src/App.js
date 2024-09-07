// import logo from './logo.svg';
// import './App.css';
// import { Greet } from './components/Greet';

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from "react";
// import Counter from './components/Counter';

// class App extends Component {
//   render(){
//   return (
//     <div className="App">
//       <Counter />
//     </div>

    
//   );
//  }
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import React,{ Component } from "react";
import FunctionClick from './components/FunctionClick';
import FormHandling from './components/FormHandling'

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      <FormHandling />
    </div>

    
  );
 }
}

export default App;

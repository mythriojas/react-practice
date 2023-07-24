import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="container mx-auto">
 {/* <Button buttonName="First Button"></Button>
<HelloWorld text="Class Component Text"></HelloWorld>
<HelloWorld text2="Class Component Text2"></HelloWorld> */}

<Posts></Posts>
    </div>
  );
}

export default App;

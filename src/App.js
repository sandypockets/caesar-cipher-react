import logo from './logo.svg';
import './App.scss';
import { Navigation } from "./components/Navigation.jsx";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Form />
    </div>
  );
}

export default App;

import "./App.css";
import { Form } from "./component/form";

function App() {
  return (
    <div className='App'>
      <Form onSubmit={(data) => console.log(data)} />
    </div>
  );
}

export default App;

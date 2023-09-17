import React, {FC} from 'react';
import './styles/App.css';
import Todo from "./components/todo/Todo";

const App: FC = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

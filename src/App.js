import './App.css';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import SearchTodo from './component/SearchTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <SearchTodo/>
      <TodoList/>
    </div>
  );
}

export default App;

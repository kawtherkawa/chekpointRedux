
import './App.css';
import AddTask from './Components/AddTask/AddTask'
import ListTask from './Components/ListTask/ListTask'
function App() {
  return (
    <div className="App">
      <h1> TODO LIST</h1>
   <AddTask/>
<ListTask/>
    </div>
  );
}

export default App;

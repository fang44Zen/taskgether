
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoZone from './component/todo-zone/todo-zone.component';
import SignIn  from './component/sign-in/sign-in.component';
import NavigationBar from './component/navigation-bar/navigation-bar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/todo-app" element={<TodoZone />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

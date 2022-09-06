
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoZone from './component/todo-zone/todo-zone.component';

import NavigationBar from './component/navigation-bar/navigation-bar';
import Authentification from './component/authentification/authentification.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/todo-app" element={<TodoZone />} />
          <Route path="/auth" element={<Authentification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

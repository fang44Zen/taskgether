
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoZone from './component/todo-zone/todo-zone.component';

import NavigationBar from './component/navigation-bar/navigation-bar';
import Authentification from './component/authentification/authentification.component';
import MenuToHide from './tests components/menu-to-hide.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/todo-app" element={<TodoZone />} />
          <Route path="/auth" element={<Authentification />} />
          <Route path='pomodoro-app' element={<MenuToHide/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import UserInfo from "./Components/UserInfo/UserInfo";
import Blog from "./Components/Blog/Blog";
import Works from "./Components/Works/Works";
import Experience from "./Components/Experience/Experience";
import Submit from "./Components/Submit/Submit";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="main">
      <UserInfo />
      <Blog />
      <Works />
      <Experience />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;

import Header  from "./Header"
import LoginForm from "./LoginForm";
import "./App.css"
import image from "./image.jpg"



function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
      <LoginForm />
      <img src={image} alt="" />
      </div>
    </div>
  );
}

export default App;

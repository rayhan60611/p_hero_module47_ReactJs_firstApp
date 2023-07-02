import "./App.css";

const arrName = ["Rayhan", "Asif", "Tuhin", "Touhid", "Risan"];

function App() {
  return (
    <div>
      <Print name="Parvez"></Print>
      <Print name="Rayhan"></Print>
    </div>
  );
}

function Print(props) {
  return (
    <div className="myclass">
      <h1>{props.name}</h1>
    </div>
  );
}

export default App;

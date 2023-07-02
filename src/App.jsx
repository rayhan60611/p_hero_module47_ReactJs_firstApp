import "./App.css";

function App() {
  const arrName = ["Rayhan", "Asif", "Tuhin", "Touhid", "Risan"];

  const myobj = [
    { name: "Rayhan", age: 28 },
    { name: "Asif", age: 27 },
    { name: "Tuhin", age: 26 },
    { name: "Touhid", age: 25 },
  ];
  return (
    <div>
      {/* {arrName.map((key) => (
        <Print key={key} name={key}></Print>
      ))} */}

      {myobj.map((item) => {
        return <Print name={item.name} age={item.age}></Print>;
      })}
    </div>
  );
}

function Print(props) {
  return (
    <div className="myclass">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  );
}

export default App;

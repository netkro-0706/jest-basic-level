import "./App.css";
import Timer from "./Timer";
import Hello from "./components/Hello";

const user = {
  //name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      <Timer />
      <Hello user={user} />
    </div>
  );
}

export default App;

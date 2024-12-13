import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row gx-2">
        <div className="col p-a-500 shadow-lg primary-300">1</div>
        <div className="col p-a-500 shadow-lg primary-500">1</div>
        <div className="col p-a-500 shadow-lg primary-700">1</div>
      </div>

      <div className="row">
        <div className="col p-a-500 shadow-lg primary-900">2</div>
      </div>

      <div className="row">
        <div className="col-4 col-12-sm col-6-md p-a-500 shadow-lg primary-100">3</div>
      </div>
    </div>
  );
}

export default App;

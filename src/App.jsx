import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container">
        <div className="row m-t-600 shadow-md p-a-200">
          <div className="col-6-md text-center">
            <h1>This is an h1 heading</h1>
          </div>
          <div className="col-6-md text-center">
            <h1>This is an h1 heading</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center p-a-300 m-t-300 shadow-lg radius-lg">
            <h2>test column - 12</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8 shadow-sm p-a-400 m-t-300">8.</div>
          <div className="col-4 shadow-sm p-a-400 m-t-300">4</div>
        </div>
        <div className="row">
          <div className="col-3 shadow-sm p-a-400 m-t-300">3.</div>
          <div className="col-9 shadow-sm p-a-400 m-t-300">9.</div>
        </div>
        <div className="row">
          <div className="col-10 shadow-sm p-a-400 m-t-300">2.</div>
          <div className="col-2 shadow-sm p-a-400 m-t-300">10.</div>
        </div>
      </div>
    </>
  );
}

export default App;

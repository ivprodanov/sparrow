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
        <div className="row m-t-600 gx-4">
          <div className="col-6 shadow-sm p-a-400 ">6</div>
          <div className="col-6 shadow-sm p-a-400 ">6</div>
        </div>
        <div className="row m-t-600">
          <div className="col-8 shadow-sm p-a-400 ">8.</div>
          <div className="col-4 shadow-sm p-a-400 ">4</div>
        </div>
        <div className="row m-t-600">
          <div className="col-3 shadow-sm p-a-400 ">3.</div>
          <div className="col-9 shadow-sm p-a-400 ">9.</div>
        </div>
        <div className="row m-t-600 gx-9">
          <div className="col-10 shadow-sm p-a-400 ">10.</div>
          <div className="col-2 shadow-sm p-a-400 ">2.</div>
        </div>
        <div className="row m-t-600 gx-2">
          <div className="col-2 shadow-sm p-a-400 ">2.</div>
          <div className="col-2 shadow-sm p-a-400 ">2.</div>
          <div className="col-4 shadow-sm p-a-400 ">4.</div>
          <div className="col-2 shadow-sm p-a-400 ">2.</div>
          <div className="col-2 shadow-sm p-a-400 ">2.</div>
        </div>
      </div>
    </>
  );
}

export default App;

import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row m-t-600 shadow-md gx-1">
        <div className="col-1 primary-100 text-center">1</div>
        <div className="col-1 primary-200 text-center">1</div>
        <div className="col-1 primary-300 text-center">1</div>
        <div className="col-1 primary-400 text-center">1</div>
        <div className="col-1 primary-500 text-center">1</div>
        <div className="col-1 primary-600 text-center">1</div>
        <div className="col-1 primary-700 text-center">1</div>
        <div className="col-1 primary-800 text-center">1</div>
        <div className="col-1 primary-900 text-center">1</div>
        <div className="col-1 secondary-100 text-center">1</div>
        <div className="col-1 secondary-200 text-center">1</div>
        <div className="col-1 secondary-300 text-center">1</div>
      </div>

      <div className="row m-t-600 gx-5">
        <div className="col-6 accent-400 shadow-sm p-a-400 text-center">6</div>
        <div className="col-6 accent-700 shadow-sm p-a-400 text-center">6</div>
      </div>

      <div className="row m-t-600 gx-4">
        <div className="col-4 neutral-200 shadow-sm p-a-400 text-center">4</div>
        <div className="col-8 neutral-500 shadow-sm p-a-400 text-center">8</div>
      </div>

      <div className="row m-t-600 gx-3">
        <div className="col-3 secondary-100 shadow-sm p-a-400 text-center">
          3
        </div>
        <div className="col-9 secondary-800 shadow-sm p-a-400 text-center">
          9
        </div>
      </div>

      <div className="row m-t-600 gx-9">
        <div className="col-10 primary-200 shadow-sm p-a-400 text-center">
          10
        </div>
        <div className="col-2 primary-600 shadow-sm p-a-400 text-center">2</div>
      </div>

      <div className="row m-t-600 gx-4">
        <div className="col shadow-sm p-a-400 primary-900 text-center">
          Auto
        </div>
        <div className="col shadow-sm p-a-400 secondary-300 text-center">
          Auto
        </div>
        <div className="col shadow-sm p-a-400 accent-900 text-center">Auto</div>
      </div>

      <div className="row m-t-600 gx-5">
        <div className="col-2 primary-300 shadow-sm p-a-400 text-center">2</div>
        <div className="col-2 secondary-400 shadow-sm p-a-400 text-center">
          2
        </div>
        <div className="col-4 accent-600 shadow-sm p-a-400 text-center">4</div>
        <div className="col-2 neutral-700 shadow-sm p-a-400 text-center">2</div>
        <div className="col-2 neutral-900 shadow-sm p-a-400 text-center">2</div>
      </div>
    </div>
  );
}

export default App;

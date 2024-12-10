import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>test</h2>
          </div>
          <div className="col-6">
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button variant="secondary" size="sm">
              Secondary Button
            </Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="col-6">
            <Button variant="primary" size="lg">
              Primary Button
            </Button>
          </div>
        </div>
        <div className="row">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima facilis vitae, sunt ipsum, enim iure in accusantium aliquam molestiae odit, officiis blanditiis libero repellendus nisi accusamus illo! Cumque, ipsum!
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;

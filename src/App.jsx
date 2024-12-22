import Button from "./components/Button";
import Card from "./components/Card";
import { Thing } from "./components/Thing";
import { Things } from "./components/Things";
import GlassImage from '../src/assets/images/glass.jpg'

function App() {
  const functionOne = () => {
    alert(1)
  }

  const functionTwo = () => {
    alert(2)
  }

  const functionThree = () => {
    alert(3)
  }
  return (
    <div className="container">
      <div className="row gx-2 gy-4">
        <div className="col p-a-500 shadow-lg primary-300">1</div>
        <div className="col p-a-500 shadow-lg primary-500">1</div>
        <div className="col p-a-500 shadow-lg primary-700">1</div>
      </div>

      <div className="row gy-2">
        <div className="col p-a-500 shadow-lg primary-900">2</div>
      </div>

      <div className="row">
        <div className="col-4 col-12-sm col-6-md p-a-500 shadow-lg primary-100">
          3
        </div>
      </div>
      <div className="row m-y-400 gx-4">
          <Thing description={"a big primary button"} event={() => alert('test')}>button</Thing>
          <div className="col">
            <Things
              description="3 small rounded shadowed secondary buttons"
              texts={["button1", "button2", "button3"]}
              events={[functionOne, functionTwo, functionThree]}
            />
          </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Card title='Image Card' variant="image-card" cardImage={GlassImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
          </Card>
          
        </div>
        <div className="col-4">
        <Card title='Simple Card' variant="simple-card" cardImage={GlassImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
          </Card>
        </div>
        <div className="col-4">
        <Thing cardTitle={'Simple Card thing'} description={'a small card'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima itaque, a molestiae voluptate</Thing>
        </div>
      </div>
    </div>
  );
}

export default App;

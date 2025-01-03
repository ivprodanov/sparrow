import React from "react";
import { Thing } from "./components/Thing";
import Glass from '../src/assets/images/glass.jpg'

export const Demo = () => {
  return (
    <div className="container secondary-100">
      <div className="text-align-center">
        <h1 className="fs-900 fw-700">SPARROW</h1>
        <p>We do "things" different around here.</p>
      </div>

      <div className="row m-t-500 shadow-lg p-a-400">
        <div className="col-3 col-12-sm">
          The idea of this library is pretty straightforward - description. Let
          me explain: We're used to building components a certain way. The main
          concept here is that, while you can still do this, you can also
          "describe" your own "Thing" - similar to how you would describe a bird
          you saw in the wild to your friend (don't mind the lack of real-life
          in this analogy).
        </div>
        <div className="col col-12-sm m-x-auto-content">
          <Thing description="a small simple card" cardTitle={"Card-Thing"}>
            This whole card was created just like that.
          </Thing>
        </div>
      </div>
      <div className="row m-t-500  shadow-lg p-a-400">
        <div className="col col-12-sm text-align-center">
          <Thing description={"a medium sized button"}>Button Thing</Thing>
        </div>
        <div className="col-3 col-12-sm">
          <p>
            You could pretty much do the same thing with any of the main UI
            components - Here's a button.
          </p>
        </div>
      </div>
      <div className="row m-t-500 shadow-lg p-a-400">
        <div className="col col-12-sm m-x-auto-content">
         <Thing description='a small secondary image-card' cardImage={Glass}>
            <p>You can create such cards too</p>
         </Thing>
        </div>
        
        <div className="col col-12-sm text-align-center m-x-auto-content">
         <Thing description='a small accent card'>
            <p>Or combine Things..</p>
            <br />
            <Thing event={() => alert(1)} description='a small primary rounded button'>Click.</Thing>
         </Thing>
        </div>
      </div>
    </div>
  );
};

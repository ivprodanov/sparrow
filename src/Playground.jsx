import React, { useState } from "react";
import { Thing } from "./components/Thing";

export const Playground = () => {
  // Default state shows a cool starting point
  const [input, setInput] = useState("big primary rounded card");

  return (
    <Thing description="container" className="p-y-800">
      <Thing description="centered column" className="m-b-700">
        <Thing description="accent h6 heading" className="uppercase fw-700 m-b-200">Interactive Lab</Thing>
        <Thing description="h2 heading" className="fs-800 fw-700 text-light m-b-300">Component Playground</Thing>
        <Thing description="paragraph" className="text-neutral-400 fs-400">
          Type a description below to see the linguistic engine in action.
        </Thing>
      </Thing>

      <Thing description="loose row" className="align-items-start">
        
        {/* INPUT BOX */}
        <Thing description="half column" className="col-12-md m-b-600">
          <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 shadow-lg p-a-500">
            <Thing description="h4 heading" className="text-light m-b-300">The Description</Thing>
            
            {/* We use a standard input here for the reactive binding */}
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-a-400 radius-md neutral-900 border-sm border-neutral-700 text-primary-300 fs-400 fw-700 shadow-sm"
              placeholder="e.g. big primary rounded button"
              style={{ outline: 'none' }}
            />

            <ul className="m-t-500 text-neutral-400 fs-200" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>✅ Try: <span className="text-primary-400">"small accent rounded button"</span></li>
              <li>✅ Try: <span className="text-primary-400">"medium-sized secondary card"</span></li>
              <li>✅ Try: <span className="text-primary-400">"centered bold h2 heading"</span></li>
            </ul>
          </Thing>
        </Thing>

        {/* LIVE RENDER AREA */}
        <Thing description="half column" className="col-12-md">
          <Thing description="centered column" className="neutral-900 radius-lg shadow-xl p-a-800 border-sm border-neutral-800 min-h-300" style={{ minHeight: '300px', display: 'grid', placeItems: 'center' }}>
            
            {/* THE MAGIC LINE: We pass the user's string directly to Thing */}
            <Thing description={input} cardTitle="Dynamic Result">
                {input.includes('button') ? 'Click Me' : 'This is a live preview of your linguistic routing.'}
            </Thing>

          </Thing>
        </Thing>

      </Thing>
    </Thing>
  );
};
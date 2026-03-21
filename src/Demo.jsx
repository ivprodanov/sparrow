import React from "react";
import { Thing } from "./components/Thing";

import Bird1 from '../src/assets/images/bird1.jpg';
import Bird2 from '../src/assets/images/bird2.jpg';
import Bird3 from '../src/assets/images/bird3.jpg';
import { Playground } from "./Playground";

export const Demo = () => {
  const carouselImages = [
    { src: Bird1, alt: "Sparrow concept 1" },
    { src: Bird2, alt: "Sparrow concept 2" },
    { src: Bird3, alt: "Sparrow concept 3" }
  ];

  const testimonialCards = [
    { title: "Sarah J., Senior Engineer", children: "Sparrow cut our frontend development time in half. The linguistic routing feels like magic." },
    { title: "Marcus T., Tech Lead", children: "Finally, a design system that doesn't force me to memorize 400 different utility class names." },
    { title: "Elena R., Product Designer", children: "The SCSS token integration means the developers always match my Figma files perfectly." }
  ];

  return (
    <div className="bg-dark" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <Thing description="container" className="p-y-400">
        
        {/* ==========================================
            NAVBAR
            ========================================== */}
        <Thing description="loose row" className="align-items-center m-b-700 p-x-400">
          <Thing description="third column">
            <Thing description="h3 heading" className="fw-700 text-neutral-100">Sparrow UI</Thing>
          </Thing>
          <Thing description="two-thirds column right">
            <Thing description="small neutral rounded button" className="m-r-200 neutral-800 text-neutral-100">How it Works</Thing>
            <Thing description="small neutral rounded button" className="m-r-200 neutral-800 text-neutral-100">Features</Thing>
            <Thing description="small primary rounded button" className="fw-700">Documentation</Thing>
          </Thing>
        </Thing>

        {/* ==========================================
            1. HERO SECTION
            ========================================== */}
        <Thing description="centered column" className="m-b-700 p-x-400 p-y-600">
          <Thing description="accent h6 heading" className="uppercase fw-700 m-b-300">
            The Next Evolution of React
          </Thing>
          
          <Thing description="h1 heading" className="fs-900 fw-800 m-b-400 lh-200 text-neutral-100">
            Design systems should speak human.
          </Thing>
          
          <Thing description="paragraph" className="fs-500 lh-500 m-b-600 text-neutral-300">
            Stop wrestling with deeply nested divs and complex prop drilling. 
            Build faster, cleaner, and more maintainable interfaces using linguistic routing.
          </Thing>
          
          <Thing description="loose centered row">
            <Thing description="big primary rounded button" className="shadow-lg fw-700">
              Start Building Free
            </Thing>
            <Thing description="big neutral rounded button" className="neutral-800 text-neutral-100 fw-700 border-sm border-neutral-700">
              Explore Components
            </Thing>
          </Thing>
        </Thing>
        <Playground/>

        {/* ==========================================
            2. STATS SECTION 
            ========================================== */}
        <Thing description="loose row" className="m-b-700 p-x-400 border-t-sm border-b-sm border-neutral-800 p-y-400">
          <Thing description="quarter column" className="text-align-center col-12-sm m-b-400">
            <Thing description="h2 heading" className="text-primary-400 fw-800 fs-800">10x</Thing>
            <Thing description="paragraph" className="text-neutral-400 fw-700 uppercase fs-100">Faster UI Build</Thing>
          </Thing>
          <Thing description="quarter column" className="text-align-center col-12-sm m-b-400">
            <Thing description="h2 heading" className="text-primary-400 fw-800 fs-800">30+</Thing>
            <Thing description="paragraph" className="text-neutral-400 fw-700 uppercase fs-100">Core Components</Thing>
          </Thing>
          <Thing description="quarter column" className="text-align-center col-12-sm m-b-400">
            <Thing description="h2 heading" className="text-primary-400 fw-800 fs-800">0kb</Thing>
            <Thing description="paragraph" className="text-neutral-400 fw-700 uppercase fs-100">External Dependencies</Thing>
          </Thing>
          <Thing description="quarter column" className="text-align-center col-12-sm m-b-400">
            <Thing description="h2 heading" className="text-primary-400 fw-800 fs-800">100%</Thing>
            <Thing description="paragraph" className="text-neutral-400 fw-700 uppercase fs-100">Customizable SCSS</Thing>
          </Thing>
        </Thing>

        {/* ==========================================
            3. HOW IT WORKS (The Code Editor)
            ========================================== */}
        <Thing description="loose row" className="m-b-700 align-items-center p-x-400">
          <Thing description="half column" className="col-12-md m-b-600">
            <Thing description="h2 heading" className="fs-800 fw-700 m-b-300 lh-200 text-neutral-100">
              Speak it into existence.
            </Thing>
            <Thing description="paragraph" className="fs-400 lh-500 m-b-500 text-neutral-300">
              Sparrow's engine parses standard English adjectives and nouns to automatically assign the correct React components, SCSS modules, and layout structures. 
            </Thing>
            <ul className="text-neutral-300 fs-300 fw-500 m-b-500" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="row align-items-center" style={{ gap: '12px' }}>
                <span className="primary-900 text-primary-300 radius-full p-x-200 fw-700 fs-200 border-sm border-primary-700">1</span> Define your size
              </li>
              <li className="row align-items-center" style={{ gap: '12px' }}>
                <span className="primary-900 text-primary-300 radius-full p-x-200 fw-700 fs-200 border-sm border-primary-700">2</span> Pick a variant color
              </li>
              <li className="row align-items-center" style={{ gap: '12px' }}>
                <span className="primary-900 text-primary-300 radius-full p-x-200 fw-700 fs-200 border-sm border-primary-700">3</span> Name the component
              </li>
            </ul>
          </Thing>

          <Thing description="half column" className="col-12-md">
            <div className="neutral-900 radius-lg shadow-xl overflow-hidden border-sm border-neutral-800 w-full">
              <div className="row align-items-center p-x-400 p-y-200 neutral-800 border-b-sm border-neutral-700" style={{ gap: '8px' }}>
                <div className="radius-full" style={{ width: '12px', height: '12px', background: '#ff5f56' }}></div>
                <div className="radius-full" style={{ width: '12px', height: '12px', background: '#ffbd2e' }}></div>
                <div className="radius-full" style={{ width: '12px', height: '12px', background: '#27c93f' }}></div>
                <span className="text-neutral-400 fs-100 fw-500 m-l-200">App.jsx</span>
              </div>
              <div className="p-a-400 text-light fs-200" style={{ fontFamily: 'monospace', lineHeight: '1.5', overflowX: 'auto' }}>
                <span style={{ color: '#c678dd' }}>import</span> {'{ Thing }'} <span style={{ color: '#c678dd' }}>from</span> <span style={{ color: '#98c379' }}>'sparrow-ui'</span>;<br/><br/>
                <span style={{ color: '#61afef' }}>&lt;Thing</span> <br/>
                &nbsp;&nbsp;<span style={{ color: '#d19a66' }}>description</span>=<span style={{ color: '#98c379' }}>"medium-sized accent rounded card"</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#d19a66' }}>cardTitle</span>=<span style={{ color: '#98c379' }}>"It's that simple."</span><br/>
                <span style={{ color: '#61afef' }}>&gt;</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#61afef' }}>&lt;Thing</span> <span style={{ color: '#d19a66' }}>description</span>=<span style={{ color: '#98c379' }}>"small primary button"</span><span style={{ color: '#61afef' }}>&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me<br/>
                &nbsp;&nbsp;<span style={{ color: '#61afef' }}>&lt;/Thing&gt;</span><br/>
                <span style={{ color: '#61afef' }}>&lt;/Thing&gt;</span>
              </div>
            </div>
          </Thing>
        </Thing>

        {/* ==========================================
            4. BENTO GRID FEATURES
            ========================================== */}
        <Thing description="centered column" className="m-b-500 p-x-400">
          <Thing description="h2 heading" className="fs-800 fw-700 m-b-200 text-neutral-100">
            Everything you need.
          </Thing>
          <Thing description="paragraph" className="fs-400 lh-500 text-neutral-300">
            Packed with robust, scalable components out of the box.
          </Thing>
        </Thing>

        <Thing description="loose row" className="m-b-700 p-x-400">
          <Thing description="two-thirds column" className="col-12-md m-b-400">
            <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md p-a-400" cardTitle="Zero Configuration">
              <Thing description="paragraph" className="lh-500 m-t-200 text-neutral-300">
                Drop Sparrow into your project and start writing natural language immediately. No heavy setup, config files, or webpack wrestling required. It just works.
              </Thing>
            </Thing>
          </Thing>

          <Thing description="third column" className="col-12-md m-b-400">
            <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md p-a-400" cardTitle="Accessible">
              <Thing description="paragraph" className="lh-500 m-t-200 text-neutral-300">
                Built with standard HTML attributes and screen-reader support.
              </Thing>
            </Thing>
          </Thing>

          <Thing description="third column" className="col-12-md m-b-400">
            <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md p-a-400" cardTitle="Extensible">
              <Thing description="paragraph" className="lh-500 m-t-200 text-neutral-300">
                Add your own components to the dictionary mapping in seconds.
              </Thing>
            </Thing>
          </Thing>

          <Thing description="two-thirds column" className="col-12-md m-b-400">
            <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md p-a-400" cardTitle="Fully Typed SCSS">
              <Thing description="paragraph" className="lh-500 m-t-200 text-neutral-300">
                Sparrow relies on a single source of truth. Change your primary color in `_colors.scss` and watch as focus rings, buttons, and carousels automatically update.
              </Thing>
            </Thing>
          </Thing>
        </Thing>
{/* ==========================================
          SECTION: ZIG-ZAG FEATURE HIGHLIGHTS
          ========================================== */}
      <Thing description="loose row" className="align-items-center m-b-900 p-x-400">
        <Thing description="half column" className="col-12-md m-b-600">
          <Thing description="accent h6 heading" className="uppercase fw-700 m-b-200">Semantic Engine</Thing>
          <Thing description="h2 heading" className="fs-700 fw-700 m-b-300 lh-200 text-neutral-100">
            No more hunting for class names.
          </Thing>
          <Thing description="paragraph" className="fs-400 lh-500 m-b-400 text-neutral-300">
            Instead of trying to remember if your card needs `p-4 shadow-lg rounded-xl bg-slate-800`, just tell Sparrow you want a "big neutral rounded card". The engine maps the intent to the exact design tokens automatically.
          </Thing>
          <Thing description="small neutral rounded button" className="neutral-800 border-sm border-neutral-700 text-light">Learn about mappings →</Thing>
        </Thing>
        
        <Thing description="half column" className="col-12-md">
          {/* Using an image card to act as a sleek product shot placeholder */}
          <Thing description="big rounded image-card" className="border-sm border-neutral-700 shadow-xl" cardImage={Bird2} />
        </Thing>
      </Thing>

      {/* Swapped layout for the zig-zag effect */}
      <Thing description="loose row" className="align-items-center m-b-900 p-x-400" style={{ flexDirection: 'row-reverse' }}>
        <Thing description="half column" className="col-12-md">
          <Thing description="big rounded image-card" className="border-sm border-neutral-700 shadow-xl" cardImage={Bird3} />
        </Thing><Thing description="half column" className="col-12-md m-b-600">
          <Thing description="secondary h6 heading" className="uppercase fw-700 m-b-200">Theme Aware</Thing>
          <Thing description="h2 heading" className="fs-700 fw-700 m-b-300 lh-200 text-neutral-100">
            Colors that adapt perfectly.
          </Thing>
          <Thing description="paragraph" className="fs-400 lh-500 m-b-400 text-neutral-300">
            Sparrow's SCSS engine automatically calculates the luminance of your backgrounds to ensure text is always readable. Dark mode, light mode, or wild accent colors—your UI will never break accessibility standards.
          </Thing>
          <Thing description="small neutral rounded button" className="neutral-800 border-sm border-neutral-700 text-light">Explore colors →</Thing>
        </Thing>
        
      </Thing>
        

        {/* ==========================================
            6. MEDIA SHOWCASE
            ========================================== */}
        <Thing description="loose row" className="m-b-700 align-items-center p-x-400">
          <Thing description="half column" className="col-12-md m-b-600">
            <Thing description="h2 heading" className="fs-800 fw-700 m-b-300 lh-200 text-neutral-100">
              Beautiful galleries.
            </Thing>
            <Thing description="paragraph" className="fs-500 lh-500 m-b-500 text-neutral-300">
              Pass an array of images to the Sparrow carousel component and let the engine handle the pagination, animations, and responsiveness.
            </Thing>
            <Thing description="medium-sized primary rounded button">
              View Gallery Docs
            </Thing>
          </Thing>

          <Thing description="half column" className="col-12-md">
            <Thing description="big rounded image-carousel" className="shadow-lg">
              {carouselImages}
            </Thing>
          </Thing>
        </Thing>

        {/* ==========================================
            7. FAQ SECTION
            ========================================== */}
        <Thing description="centered column" className="m-b-500 p-x-400">
          <Thing description="h2 heading" className="fs-700 fw-700 m-b-200 text-neutral-100">
            Frequently Asked Questions
          </Thing>
        </Thing>
        
        <Thing description="centered column" className="m-b-700 p-x-400">
          {/* Added h-auto and reduced m-b gap */}
          <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md w-full m-b-300 p-a-300" cardTitle="Is it really just natural language?">
            <Thing description="paragraph" className="text-neutral-300 lh-500 m-t-200">
              Yes. The engine parses standard strings, maps them to your SCSS utilities, and dynamically renders the correct React components.
            </Thing>
          </Thing>
          
          <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-md w-full m-b-300 p-a-300" cardTitle="Can I add my own components?">
            <Thing description="paragraph" className="text-neutral-300 lh-500 m-t-200">
              Absolutely. You can add a new block to `mappings.js` in about 30 seconds to support complex custom components like accordions or modals.
            </Thing>
          </Thing>
        </Thing>

        {/* ==========================================
            8. INTERACTIVE FORM
            ========================================== */}
        <Thing description="loose row" className="m-b-700 align-items-center p-x-400">
          <Thing description="half column" className="col-12-md m-b-600">
            <Thing description="h2 heading" className="fs-800 fw-700 m-b-300 lh-200 text-neutral-100">
              Ready to join the flock?
            </Thing>
            <Thing description="paragraph" className="fs-400 lh-500 m-b-400 text-neutral-300">
              Get early access to the Sparrow v1.0 release. We promise not to spam your inbox.
            </Thing>
            
            <Thing description="paragraph" className="fs-300 fw-700 m-b-200 text-neutral-100">✓ Full React 18 Support</Thing>
            <Thing description="paragraph" className="fs-300 fw-700 m-b-200 text-neutral-100">✓ Custom SCSS Theme Map</Thing>
            <Thing description="paragraph" className="fs-300 fw-700 text-neutral-100">✓ 30+ Pre-built Components</Thing>
          </Thing>

          <Thing description="half column" className="col-12-md">
            <Thing description="medium-sized rounded card" className="h-auto neutral-800 border-sm border-neutral-700 shadow-xl p-a-400">
              <Thing description="stacked form" event={(e) => { e.preventDefault(); alert('Request Sent!'); }}>
                
                <Thing description="loose row" className="w-full">
                  <Thing description="half column" className="col-12-sm">
                     <Thing description="medium-sized primary input" className="neutral-900" cardTitle="First Name" />
                  </Thing>
                  <Thing description="half column" className="col-12-sm">
                     <Thing description="medium-sized primary input" className="neutral-900" cardTitle="Last Name" />
                  </Thing>
                </Thing>

                <Thing description="medium-sized primary input" className="neutral-900" cardTitle="Work Email Address" type="email" />
                
                <Thing description="medium-sized primary select" className="neutral-900">
                  {["I am a Developer", "I am a Designer", "I am a Product Manager", "Just browsing"]}
                </Thing>

                <Thing description="small primary checkbox" cardTitle="Send me weekly UI tips" className="m-t-200 text-light" />

                <Thing description="medium-sized primary rounded button" className="w-full m-t-400 shadow-md fw-700" type="submit">
                  Request Early Access
                </Thing>

              </Thing>
            </Thing>
          </Thing>
        </Thing>

        {/* ==========================================
            9. FOOTER
            ========================================== */}
        <Thing description="centered column" className="border-t-sm border-neutral-800 p-t-600 p-x-400 m-b-400">
           <Thing description="h3 heading" className="fw-700 text-neutral-100 m-b-200">Sparrow UI</Thing>
           <Thing description="paragraph" className="text-neutral-500 fs-200">© 2026 Sparrow UI. Built with linguistic routing.</Thing>
        </Thing>

      </Thing>
    </div>
  );
};
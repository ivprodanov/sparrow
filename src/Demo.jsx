import React from "react";
import { Thing } from "./components/Thing";

// Placeholder assets for the demo
import Bird1 from '../src/assets/images/bird1.jpg';
import Bird2 from '../src/assets/images/bird2.jpg';
import Bird3 from '../src/assets/images/bird3.jpg';

export const Demo = () => {
  // Dummy data for the Card Carousel
  const carouselCards = [
    { title: "Adaptable", children: "Sparrow bends to your will with natural language processing." },
    { title: "Accessible", children: "Built with modern web standards and screen readers in mind." },
    { title: "Beautiful", children: "SCSS design tokens make everything look completely cohesive." }
  ];

  // Dummy data for Image Carousel
  const carouselImages = [
    { src: Bird1, alt: "A beautiful sparrow" },
    { src: Bird2, alt: "Sparrow taking flight" },
    { src: Bird3, alt: "Sparrow resting on a branch" }
  ];

  return (
    // MAIN WRAPPER: Generous padding at the top and bottom of the page
    <Thing description="container" className="p-y-800">
      
      {/* ==========================================
          1. HERO SECTION (Dark Mode Bento Box)
          ========================================== */}
      <Thing description="big neutral rounded card" className="shadow-xl m-b-800 p-y-800 text-align-center">
        <Thing description="centered column">
          <Thing description="accent-500 bold uppercase h6 heading" className="m-b-200">
            Introducing Sparrow v1.0
          </Thing>
          
          <Thing description="bold h1 heading" className="fs-900 m-b-300">
            Build UI at the Speed of Thought.
          </Thing>
          
          <Thing description="lead paragraph" className="m-b-500 neutral-200 m-x-auto-content w-50">
            Ditch the div soup and complex class names. Sparrow's linguistic routing engine 
            allows you to literally speak your React components into existence.
          </Thing>
          
          <Thing description="loose centered row">
            <Thing description="big primary rounded button" event={() => alert("Let's fly!")}>
              Start Building Free
            </Thing>
            <Thing description="big neutral bordered button">
              Read Documentation
            </Thing>
          </Thing>
        </Thing>
      </Thing>

      {/* ==========================================
          2. FEATURES SECTION (3-Column Grid) 
          ========================================== */}
      <Thing description="centered column" className="m-b-600">
        <Thing description="bold h2 heading" className="text-align-center m-b-200">
          Everything You Need. Nothing You Don't.
        </Thing>
        <Thing description="muted text-align-center paragraph" className="m-b-500">
          A fully-featured design system packed into a single, intelligent component.
        </Thing>
      </Thing>

      <Thing description="loose row" className="m-b-800">
        <Thing description="third column" className="col-12-sm m-b-400">
          <Thing description="medium-sized secondary rounded card" className="shadow-lg h-full" cardTitle="Linguistic Routing">
            <Thing description="paragraph">
              Just tell Sparrow you want a "medium-sized secondary rounded card" and it handles 
              the React props, DOM nesting, and SCSS grid layouts automatically.
            </Thing>
          </Thing>
        </Thing>

        <Thing description="third column" className="col-12-sm m-b-400">
          <Thing description="medium-sized accent rounded image-card" className="shadow-lg h-full" cardImage={Bird1} cardTitle="Media Ready">
            <Thing description="paragraph">
              Images, SVGs, and rich media fit perfectly into your component structures with minimal effort and zero layout breakage.
            </Thing>
          </Thing>
        </Thing>

        <Thing description="third column" className="col-12-sm m-b-400">
          <Thing description="medium-sized primary rounded card" className="shadow-lg h-full" cardTitle="Highly Scalable">
            <Thing description="paragraph">
              Because of the standardized parsing dictionary, adding entirely new components to your design system takes minutes, not hours.
            </Thing>
          </Thing>
        </Thing>
      </Thing>

      {/* ==========================================
          3. CAROUSEL SECTION (Split Layout) 
          ========================================== */}
      <Thing description="loose row" className="m-b-800 shadow-xl p-a-600 radius-lg secondary-100">
        <Thing description="half column" className="col-12-md m-b-400">
          <Thing description="bold h3 heading" className="m-b-200">Beautiful Galleries</Thing>
          <Thing description="paragraph" className="m-b-400">
            Pass an array of image objects and Sparrow automatically builds a swipeable, animated gallery with theme-aware pagination dots.
          </Thing>
          <Thing description="medium-sized primary rounded image-carousel" className="shadow-md">
            {carouselImages}
          </Thing>
        </Thing>

        <Thing description="half column" className="col-12-md">
          <Thing description="bold h3 heading" className="m-b-200">Interactive Content</Thing>
          <Thing description="paragraph" className="m-b-400">
            You can even pass an array of card configurations to generate a content slider that perfectly respects your typography scales.
          </Thing>
          <Thing description="medium-sized accent card-carousel">
            {carouselCards}
          </Thing>
        </Thing>
      </Thing>

      {/* ==========================================
          4. FORMS SECTION (The "Join" CTA) 
          ========================================== */}
      <Thing description="loose centered row" className="m-b-600">
        <Thing description="two-thirds column" className="col-12-md">
          <Thing description="big neutral rounded card" className="shadow-xl" cardTitle="Join the Flock">
            
            <Thing description="paragraph" className="m-b-400 neutral-200">
              Sign up today to get early access to the Sparrow UI Beta and start simplifying your frontend architecture.
            </Thing>

            {/* Form Wrapper handles vertical spacing */}
            <Thing description="stacked form" event={(e) => { e.preventDefault(); alert('Welcome to the flock!'); }}>
              
              {/* Row handles side-by-side inputs cleanly */}
              <Thing description="loose row" className="w-full">
                <Thing description="half column" className="col-12-sm m-b-300">
                  <Thing description="with-icon medium-sized primary input" cardTitle="First Name" />
                </Thing>
                <Thing description="half column" className="col-12-sm m-b-300">
                  <Thing description="medium-sized primary input" cardTitle="Last Name" />
                </Thing>
              </Thing>

              <Thing description="medium-sized primary select">
                {["Frontend Developer", "Backend Developer", "UI/UX Designer", "Product Manager", "Other"]}
              </Thing>

              <Thing description="medium-sized primary textarea" cardTitle="Tell us about what you are building..." />

              <Thing description="medium-sized secondary bordered file-upload" cardTitle="Upload your Resume (Optional)" />

              <Thing description="loose row" className="m-t-200">
                <Thing description="small accent checkbox" cardTitle="Subscribe to Sparrow UI Updates" />
              </Thing>

              <Thing description="big primary rounded button" className="w-full m-t-400 shadow-md" type="submit">
                Submit Application
              </Thing>

            </Thing>
          </Thing>
        </Thing>
      </Thing>

    </Thing>
  );
};
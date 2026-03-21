import React, { useState, useEffect } from "react";
import { Thing } from "./components/Thing";
import Bird1 from "../src/assets/images/bird1.jpg";

export const ComponentLibrary = () => {
  const [activeSection, setActiveSection] = useState("");

  // 1. Scroll-Spy Logic: Detects which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      // This margin effectively looks at the top 40% of the viewport
      rootMargin: "0px 0px -60% 0px", 
      threshold: 0.1, // 10% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // We only update if the entry is moving INTO the view from the top
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Helper for Nav Link styles
  const getNavLinkClass = (id) => {
    return activeSection === id 
      ? "text-decoration-none text-primary-400 fw-700 transition-all" 
      : "text-decoration-none text-neutral-400 hover-light transition-all";
  };

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      {/* HEADER */}
      <Thing description="container" className="border-b-sm border-neutral-800 p-y-400">
        <Thing description="h3 heading" className="fw-700 text-neutral-100">
          Sparrow Inventory
        </Thing>
      </Thing>

      <Thing description="container" className="p-y-800">
        <Thing description="loose row">
          
          {/* 2. STICKY NAVIGATION */}
          <nav className="quarter column col-12-md m-b-800 p-x-400" style={{ position: 'sticky', top: '2rem', height: 'fit-content' }}>
            <Thing description="h6 heading" className="uppercase fw-700 accent-400 m-b-400">
              Categories
            </Thing>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
              {["buttons", "cards", "typography", "forms", "media", "badges", "tabs"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={getNavLinkClass(id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MAIN SHOWCASE */}
          <main className="three-quarters column col-12-md p-x-400">
            
            {/* SECTION: BUTTONS */}
            <section id="buttons" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Buttons</Thing>
              <Thing description="paragraph" className="text-neutral-400 m-b-600">Standard triggers for actions and navigation.</Thing>
              <div className="row align-items-center" style={{ gap: "16px", flexWrap: "wrap" }}>
                <Thing description="small primary rounded button">Primary Small</Thing>
                <Thing description="medium-sized secondary rounded button">Secondary Med</Thing>
                <Thing description="big accent rounded button">Accent Big</Thing>
                <Thing description="medium-sized neutral rounded button" className="neutral-800">Neutral Dark</Thing>
                <Thing description="medium-sized primary bordered button">Bordered</Thing>
              </div>
            </section>

            {/* SECTION: CARDS */}
            <section id="cards" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Cards</Thing>
              <Thing description="loose row">
                <div className="col-6 col-12-sm">
                  <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 h-auto" cardTitle="Simple Card">
                    <Thing description="paragraph" className="text-neutral-300">Basic content container with header.</Thing>
                  </Thing>
                </div>
                <div className="col-6 col-12-sm">
                  <Thing description="medium-sized primary rounded image-card" className="shadow-lg h-auto" cardImage={Bird1} cardTitle="Image Card">
                    <Thing description="paragraph">Cards with media support.</Thing>
                  </Thing>
                </div>
              </Thing>
            </section>

            {/* SECTION: TYPOGRAPHY */}
            <section id="typography" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Typography</Thing>
              <Thing description="huge primary heading">Huge Heading</Thing>
              <Thing description="h1 secondary heading">H1 Secondary</Thing>
              <Thing description="h3 accent bold heading">H3 Accent Bold</Thing>
              <Thing description="lead neutral paragraph" className="text-neutral-300">Lead paragraph for important body text.</Thing>
              <Thing description="small muted paragraph">Small muted text for captions.</Thing>
            </section>

            {/* SECTION: FORMS */}
            <section id="forms" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Form Controls</Thing>
              <Thing description="stacked form" className="col-8 col-12-md">
                <Thing description="medium-sized primary input" cardTitle="Default Input" className="neutral-900" />
                <Thing description="medium-sized primary select" className="neutral-900">
                  {["Option One", "Option Two", "Option Three"]}
                </Thing>
                <Thing description="small primary checkbox" cardTitle="Check this box" className="text-neutral-100" />
                <Thing description="small secondary radio" cardTitle="Select this option" className="text-neutral-100" />
                <Thing description="medium-sized primary textarea" cardTitle="Your message..." className="neutral-900" />
              </Thing>
            </section>

            {/* SECTION: MEDIA */}
            <section id="media" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Media & Carousels</Thing>
              <div className="col-10 col-12-md">
                <Thing description="medium-sized primary rounded image-carousel">
                  {[{ src: Bird1, alt: "Bird 1" }, { src: Bird1, alt: "Bird 2" }]}
                </Thing>
              </div>
            </section>

            {/* SECTION: BADGES */}
            <section id="badges" className="m-b-900 border-b-sm border-neutral-800 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Badges</Thing>
              <div className="row align-items-center" style={{ gap: "12px" }}>
                <Thing description="small primary rounded badge">New Feature</Thing>
                <Thing description="small secondary rounded badge">Beta</Thing>
                <Thing description="small accent badge">Hot</Thing>
                <Thing description="small neutral rounded badge" className="neutral-700">Archived</Thing>
              </div>
            </section>

            {/* SECTION: TABS */}
            <section id="tabs" className="m-b-900 p-b-800">
              <Thing description="h2 heading" className="text-light m-b-400">Tabs</Thing>
              <div className="col-8 col-12-md">
                <Thing description="primary tabs">
                  {[
                    { label: "React Code", content: <Thing description="paragraph" className="text-neutral-300">This tab shows React implementation.</Thing> },
                    { label: "SCSS Config", content: <Thing description="paragraph" className="text-neutral-300">This tab shows SCSS variables.</Thing> },
                  ]}
                </Thing>
              </div>
            </section>

          </main>
        </Thing>
      </Thing>
    </div>
  );
};
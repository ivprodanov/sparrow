import React from "react";
import { Thing } from "./components/Thing";
import { ThemeToggle } from "./ThemeToggle";

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  // Data for our interactive Tabs
  const dashboardTabs = [
    { 
      label: "Overview", 
      content: (
        <Thing description="loose row" className="m-t-400">
          <Thing description="third column m-b-400">
            <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 h-auto" cardTitle="Total Users">
               <Thing description="h2 heading" className="text-primary-400 fw-800 fs-700">12.4k</Thing>
               <Thing description="small paragraph" className="text-neutral-500">+14% from last month</Thing>
            </Thing>
          </Thing>
          <Thing description="third column m-b-400">
            <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 h-auto" cardTitle="Conversion Rate">
               <Thing description="h2 heading" className="text-secondary-400 fw-800 fs-700">3.2%</Thing>
               <Thing description="small paragraph" className="text-neutral-500">-0.4% from last month</Thing>
            </Thing>
          </Thing>
          <Thing description="third column m-b-400">
            <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 h-auto" cardTitle="Server Uptime">
               <Thing description="h2 heading" className="text-accent-400 fw-800 fs-700">99.9%</Thing>
               <Thing description="small paragraph" className="text-neutral-500">All systems operational</Thing>
            </Thing>
          </Thing>
        </Thing>
      )
    },
    { 
      label: "Performance", 
      content: <Thing description="paragraph" className="text-neutral-400 m-t-400">Detailed performance metrics and latency charts would render here.</Thing> 
    }
  ];

  return (
    <div className="bg-dark theme-target" style={{ minHeight: '100vh' }}>
      {/* BREADCRUMB SECTION */}
    <Thing description="container" className="p-y-200">
      <Thing description="primary breadcrumb">
        {[
          { label: "Home", link: "/" },
          { label: "Dashboard", link: "/dash" },
          { label: "Project Alpha", link: "#" }
        ]}
      </Thing>
    </Thing>
      {/* 1. TOP NAVIGATION */}
      <Thing description="container" className="border-b-sm border-neutral-800 p-y-300">
        <Thing description="loose row align-items-center justify-content-between">
          <Thing description="row align-items-center" style={{ gap: '12px' }}>
            <Thing description="small primary rounded badge">Admin</Thing>
            <Thing description="h4 heading" className="fw-700">Sparrow Console</Thing>
          </Thing>
          
          <div className="row align-items-center" style={{ gap: '16px' }}>
            {/* THE TOGGLE LIVES HERE */}
            <ThemeToggle />
            <Thing description="small neutral rounded button" className="neutral-800 border-sm border-neutral-700">Sign Out</Thing>
          </div>
        </Thing>
      </Thing>

      <Thing description="container" className="p-y-600">
        {/* TRIGGER MODAL */}
      <Thing 
        description="medium-sized accent rounded button" 
        className="m-b-800"
        event={() => setIsModalOpen(true)}
      >
        Delete Project
      </Thing>

      {/* THE MODAL COMPONENT */}
      <Thing 
        description="neutral modal" 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Are you absolutely sure?"
      >
        <Thing description="paragraph" className="text-neutral-300">
          This action cannot be undone. This will permanently delete the 
          <strong> Project Alpha</strong> and remove all associated data from our servers.
        </Thing>
      </Thing>
        <Thing description="loose row">
          
          {/* 2. SIDEBAR NAVIGATION */}
          <aside className="quarter column col-12-md m-b-600">
            <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 p-a-400 h-auto">
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Thing description="small primary rounded button" className="w-full">Dashboard</Thing>
                <Thing description="small neutral rounded button" className="w-full">Analytics</Thing>
                <Thing description="small neutral rounded button" className="w-full">Settings</Thing>
                
                <div className="m-t-600 p-t-400 border-t-sm border-neutral-700">
                  <Thing description="h6 heading" className="uppercase fw-700 text-neutral-500 m-b-300 fs-100">Storage</Thing>
                  <div className="w-full neutral-900 radius-full" style={{ height: '6px' }}>
                    <div className="primary-500" style={{ width: '65%', height: '100%' }}></div>
                  </div>
                </div>
              </nav>
            </Thing>
          </aside>

          {/* 3. MAIN CONTENT */}
          <main className="three-quarters column col-12-md">
            <Thing description="h2 heading" className="m-b-100">Performance</Thing>
            <Thing description="paragraph" className="text-neutral-500 m-b-600">Real-time system health monitoring.</Thing>

            {/* Reusing our Interactive Accordions */}
            <Thing description="neutral rounded accordion" className="neutral-800 m-b-200" cardTitle="API Latency (Global)">
              <Thing description="paragraph" className="text-neutral-400 fs-200">
                Current average response time: 42ms. Region: us-east-1.
              </Thing>
            </Thing>

            <Thing description="primary rounded accordion" className="m-b-200" cardTitle="Active Deployments">
              <Thing description="paragraph" className="fs-200">
                V1.2.5 is currently propagating to 4 edge locations.
              </Thing>
            </Thing>
            {/* ==========================================
    DASHBOARD: ANALYTICS VISUALIZATION
    ========================================== */}
<Thing description="loose row" className="m-b-600">
  <Thing description="two-thirds column" className="col-12-md">
    <Thing description="medium-sized neutral rounded card" className="neutral-800 border-sm border-neutral-700 p-a-600 shadow-lg">
      <Thing description="row justify-content-between align-items-center m-b-400">
        <Thing description="h4 heading" className="text-light">Weekly Traffic</Thing>
        <Thing description="small secondary rounded badge">+22% Surge</Thing>
      </Thing>

      {/* THE LIVE BAR CHART */}
      <Thing description="primary bar-chart">
        {[
          { label: "Mon", value: 40 },
          { label: "Tue", value: 65 },
          { label: "Wed", value: 90 },
          { label: "Thu", value: 55 },
          { label: "Fri", value: 80 },
          { label: "Sat", value: 30 },
          { label: "Sun", value: 45 }
        ]}
      </Thing>
    </Thing>
  </Thing>

  <Thing description="third column" className="col-12-md">
    <Thing description="medium-sized accent rounded card" className="shadow-lg h-full p-a-600" cardTitle="Quick Report">
      <Thing description="paragraph" className="text-light m-b-400">
        Your highest traffic day this week was **Wednesday**.
      </Thing>
      <Thing description="small primary rounded button" className="w-full bg-white text-primary-900 fw-700">Download PDF</Thing>
    </Thing>
  </Thing>
</Thing>
          </main>

        </Thing>
      </Thing>
    </div>
  );
};
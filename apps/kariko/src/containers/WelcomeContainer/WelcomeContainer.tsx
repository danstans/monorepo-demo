import { CapableCalendar } from "pacemaker/components/capable-calendar";
import React from "react";

const WelcomeContainer = () => {
  return (
    <header className="App-header">
      <p>Hello Vite + React + ts!</p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <CapableCalendar />
    </header>
  );
};

export default WelcomeContainer;

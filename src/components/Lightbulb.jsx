// Import react stuff
import moment from "moment"
import React, { useState } from "react";
import "../styles.css";

const Lightbulb = () => {
  const [on, setOn] = useState(false);
  const [history, setHistory] = useState([]);

  // Initialize the state for on/off
  // ctrl + space shows Intellisense-suggestion

  const toggleLight = () => {
    let entryMessage = `The light was turned ${!on ? "on" : "off"}`;
    setHistory( [...[{time: moment().format("YYYY/MM/DD - HH:mm:ss"), message: entryMessage}], ...history] );
    setOn(!on);
    //blablaBla(); = kalla på en funktion
    // Toggle the on/off state
  };

  let renderHistoryList = Array.from(history).map((entry) => {
    return (
      <li key={entry}>
        {entry.time} - {entry.message}
      </li>
    );
  });

  // in the component, use the state to toggle classes for the lightbulb (check the css)
  return (
    <div className={`lightbulb-container ${on ? "light" : "dark"}`}>
      <div className={`lightbulb ${on ? "on" : "off"}`} onClick={toggleLight}>
        <div className="bulb"></div>
        <p className="light-text">The light is {on ? "on" : "off"}!</p>
      </div>
      <div className="history-list">
        <ul>{renderHistoryList}</ul>
      </div>
    </div>
  );
};

export default Lightbulb;

import React, { useState } from "react";
import "./App.css";
import { Alert } from "./Alert";

const App = () => {
  const [visible, setAlertVisibility] = useState(false);
  const [duration, setDuration] = useState(1000);

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-wrapper">
          <input
            value={duration}
            type="text"
            onChange={e => {
              const val = e.target.value || 0;
              setDuration(parseInt(val));
            }}
          />
        </div>
        <div className="button-wrapper">
          <button onClick={() => setAlertVisibility(true)}>Show Alert</button>
        </div>
        <Alert
          visible={visible}
          duration={duration}
          onDurationEnd={setAlertVisibility}
        >
          <div>Alert timeout is set to [{duration}]</div>
        </Alert>
      </header>
    </div>
  );
};

export default App;

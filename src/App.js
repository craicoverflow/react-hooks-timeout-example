import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Alert } from "./Alert";
import "./App.css";

const App = () => {
  const [visible, setAlertVisibility] = useState(false);
  const [duration, setDuration] = useState(1000);

  return (
    <div>
      <div className="container">
        <div className="align-middle p-3">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                value={duration}
                type="text"
                onChange={e => {
                  const val = e.target.value;
                  setDuration(val ? parseInt(val) : 0);
                }}
              />
            </FormGroup>
            <Button color="primary" onClick={() => setAlertVisibility(true)}>
              Show Alert
            </Button>
          </Form>
        </div>
      </div>
      <div>
        <Alert
          visible={visible}
          duration={duration}
          onDurationEnd={setAlertVisibility}
        >
          <div>Alert timeout is set to [{duration}]</div>
        </Alert>
      </div>
    </div>
  );
};

export default App;

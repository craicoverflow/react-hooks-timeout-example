import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Alert } from "./Alert";

const App = () => {
  const [visible, setAlertVisibility] = useState(false);
  const [duration, setDuration] = useState(1000);

  return (
    <div className="container">
      <div className="align-middle p-3">
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              value={duration}
              type="text"
              onChange={e => {
                const val = e.target.value || 0;
                setDuration(parseInt(val));
              }}
            />
          </FormGroup>
          <Button color="primary" onClick={() => setAlertVisibility(true)}>
            Show Alert
          </Button>
        </Form>
        <div className="p-3">
          <Alert
            visible={visible}
            duration={duration}
            onDurationEnd={setAlertVisibility}
          >
            <div>Alert timeout is set to [{duration}]</div>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { Provider } from "react-redux";
import store from "./app/store";
import Grid from "../src/components/Grid/index";
function App() {
  return (
    <div>
      <Provider store={store}>
          <Grid/>
      </Provider>
    </div>
  );
}

export default App;

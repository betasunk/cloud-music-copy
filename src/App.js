import React from 'react';
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config'

function App() {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;

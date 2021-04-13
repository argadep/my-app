import React from "react";
import { Menu } from "./Menu";
import Main from "./Routes";

export const ConfigContext = React.createContext();

const configValue = {
  showFilter: true,
};

const App = () => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>
        <Menu />
        <Main />
      </div>
    </ConfigContext.Provider>
  );
};

export default App;

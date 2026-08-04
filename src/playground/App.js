// This file is the playground used for development purposes (npm run playground)
// not part of the library
import React from "react";
import Datetime from "../DateTime";

// import moment from "moment";
// import "moment/locale/tzm-latn";
// moment.locale("tzm-latn");

class App extends React.Component {
  render() {
    return (
      <div>
        <Datetime locale="zh-cn" value="2023-01-01" />
      </div>
    );
  }
}

export default App;

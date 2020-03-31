import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root'

const App = () => {
    return (
        <div>
            <p>pig1994 and pig1995  </p>
        </div>
    );
};
export default hot(App);
ReactDOM.render(<App/>, document.getElementById("app"));
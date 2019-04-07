import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from "./component/Hello/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React Framework" />,
    document.getElementById("example")
);
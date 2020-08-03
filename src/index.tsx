import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles.scss";

import { Hello } from "./components/Hello";

const render = () =>
  ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
  );

if (
  "fetch" in window &&
  "Intl" in window &&
  "URL" in window &&
  "Map" in window &&
  "forEach" in NodeList.prototype &&
  "startsWith" in String.prototype &&
  "endsWith" in String.prototype &&
  "includes" in String.prototype &&
  "includes" in Array.prototype &&
  "assign" in Object &&
  "entries" in Object &&
  "keys" in Object
) {
  render();
} else {
  import("./polyfills" as any).then(render);
}

import "./style.css";
import { startClock } from "./src/clock/clock-app";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Reloj Digital</h1>
  </div>
  <div id="clock"></div>
`;

startClock();

import { updateClock } from "./store/clock-store";

/**
 * @param {HTMLDivElement}
 */
export const startClock = () => {
  setInterval(() => {
    document.getElementById("clock").textContent = updateClock();
    document.getElementById("clock").classList.add("clock-style");
  });
};

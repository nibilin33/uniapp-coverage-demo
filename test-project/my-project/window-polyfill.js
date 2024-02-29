module.exports = function getCoverage() {
  var g =
  typeof window !== "undefined" && window.Math === Math
    ? window
    : typeof global === "object"
    ? global
    : this;
  var window = g;
  console.log(window.__coverage__, "window.__coverage__");
  return window.__coverage__;
}

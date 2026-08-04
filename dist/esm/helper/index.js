export var log = function log(message, method) {
  var con = typeof window !== "undefined" && window.console;
  if (!con) return;
  if (!method) {
    method = "warn";
  }
  con[method]("***react-datetime:" + message);
};
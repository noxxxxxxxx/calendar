export const log = (message, method) => {
  let con = typeof window !== "undefined" && window.console;
  if (!con) return;

  if (!method) {
    method = "warn";
  }
  con[method]("***react-datetime:" + message);
};

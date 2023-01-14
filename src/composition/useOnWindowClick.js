const callbackList = [];

window.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  callbackList.forEach((callback) => callback());
});

export default function (callback) {
  callbackList.push(callback);
}

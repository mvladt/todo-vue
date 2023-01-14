import { request } from "../index.js";
import { urlBase64ToUint8Array } from "../../utils.js";

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;

export default {
  postSubscription(subscription) {
    return request
      .post("/push/subscription", subscription)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  makePushMessage(timerText) {
    return request
      .post("/push/", { timerText })
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  async subscribeUserToPush() {
    const registration = await navigator.serviceWorker.getRegistration();

    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    };

    const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
    return pushSubscription;
  },
};

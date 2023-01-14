import { fetchPostJson } from "./index.js";
import { urlBase64ToUint8Array } from "../utils.js";

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;

export function postSubscription(subscription) {
  return fetchPostJson("/push/subscription", subscription);
}

export function makePushMessage(timerText) {
  return fetchPostJson("/push/", { timerText });
}

export async function subscribeUserToPush() {
  const registration = await navigator.serviceWorker.getRegistration();

  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
  };

  const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
  return pushSubscription;
}

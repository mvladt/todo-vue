import { computed } from "vue";
import useWindowWidth from "./useWindowWidth.js";

export default function useIsMobile() {
  const windowWidth = useWindowWidth();

  return computed(() => windowWidth.value <= 1090);
}

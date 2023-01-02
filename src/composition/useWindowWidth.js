import { ref, onMounted } from "vue";

export default function useWindowWidth() {
  const width = ref(window.innerWidth);

  function updateWidth() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
  });

  return width;
}

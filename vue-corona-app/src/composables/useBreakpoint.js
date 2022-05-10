import { computed, onMounted, onUnmounted, ref } from "vue";

export default function useBreakpoint() {
  // window.: 는 브라우저에서 제공해주는 객체
  // innerWidth: 현재 브라우저의 넓이와 어떤 브라우저 사용? 어떤 기기에서 접속? 알려줌
  let windowWidth = ref(window.innerWidth);
  // 윈도우 창의 변화가 있을때마다 실행
  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  // risize가 발생될 때 마다
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));
  const type = computed(() => {
    let size = "sm";
    if (windowWidth.value > 549 && windowWidth.value < 1200) size = "md";
    if (windowWidth.value > 1199) size = "lg";

    return size;
  });

  return {
    type,
  };
}

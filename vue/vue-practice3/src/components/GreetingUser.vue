<template>
  <!-- div태그가 없을때 App.vue에서 넘긴 아이디를 적용하기 위해 $attrs사용 
        div태그가 있으면 자동으로 상위 div에 아이디가 적용됨 (attrs도 적용)-->
  <h2 v-bind="$attrs">Hello {{ username }}</h2>
  <h3>오늘이 {{ numberOfVisit }} 번째 방문입니다.</h3>
  <h3>사이트 이름은 {{ siteInfo.name }}입니다.</h3>
</template>

<script>
export default {
  name: "GreetingUser",
  inheritAttrs: false, // id가 자동으로 상속되는 것을 막는다.
  props: {
    //String, Number, Object, Boolean ...
    // 넘겨받은 프롭
    // 넘겨받은 쪽에서는 값을 직접 바꾸지 못함
    username: String,
    // username: {
    //   // 기본값 제시
    //   type: String,
    //   default: "User!",
    // },
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      // object나 array는 default설정하는 방법이 다름
      type: Object,
      default: () => {
        return {
          name: "-",
          teacher: "-",
          subject: "-",
        };
      },
    },
  },
};
</script>

<!-- scoped: 이 파일에 속한 것에만 적용됨 -->
<style scoped></style>

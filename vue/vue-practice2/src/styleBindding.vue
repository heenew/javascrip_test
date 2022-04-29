<template>
  <div>
    <h1 v-bind:style="[basicStyle, titleStyle]">Hello Vue</h1>
    <!-- 배열로 선언도 가능 -->

    <!-- <h1 id="title">Hello Title</h1>
    <h1 v-bind:id="dynamicId">Hello Title</h1>
    <a v-bind:href="url">naver</a>
    <img v-bind:src="image.src" v-bind:alt="image.alt" />
    <input v-bind:type="inputType" />
    <p v-bind:style="pStyle">Hello Vue</p> -->
    <p v-bind:style="{ color: 'red', fontSize: `${basicSize}px` }">Hello Vue</p>
    <!-- 인라인 방식 '-' 때문에 폰트사이즈에는 따옴표 붙임 or 카멜사이즈-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dynamicId: "content",
      url: "https://www.naver.com",
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random image",
      },
      inputType: "color",
      pStyle: "color:red;  font-size:36px;",
      basicSize: 50,
      basicStyle: {
        background: "yellow",
      },
      titleStyle: {
        "font-weight": "bold",
        fontSize: "50px",
        border: "1px solid red",
      },
    };
  },
};
</script>

<style>
#title {
  color: red;
  background: yellow;
}
#content {
  color: blue;
  background: pink;
}
</style>

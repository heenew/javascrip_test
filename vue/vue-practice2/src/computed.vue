<template>
  <div>
    <!-- Computed: 계산된 값을 제공해주는 속성(data와 유사) -->
    <h1>Computed</h1>
    <h2>{{ address }}</h2>
    <h2>내가 받은 점수의 합(computed) {{ totalScore }}</h2>
    <h2>내가 받은 점수의 합(methods) {{ getTotalScore() }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      usrtName: "scalper",
      address1: "성남시",
      address2: "분당구",
      address3: "정자로",
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
    };
  },
  // computed: 오브젝트 형태로 작성, 매서드 형태로 리턴. 값들이 캐시형태로, 값이 직접적으로 변화가 일어나기 전까지 계산을 더이상 수행하지 않음
  // methods: 작성한 값 이외에 다른 값이 변하게 되면 그때마다 매서드를 수행
  computed: {
    address() {
      return `${this.address1} - ${this.address2} - ${this.address3}`;
    },
    totalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
  directives: {},
  methods: {
    getTotalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
};
</script>

<style></style>

<!-- 리스트 렌더링 -->
<template>
<div>
    <!-- <ul>
      //fruit안에 fruits의 인자 하나하나가 담김
      <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
      //배열 반복
      <li v-for="(fruit, index) in fruits" :key="index">{{index+1}}{{fruit}}</li>
    </ul>
     //오브젝트 반복
    <h2 v-for="(value, key, index) in user" :key="key"> {{index}}. {{key}} => {{value}}</h2>
    //숫자 반복 
    <p v-for="n in 10" :key=n>{{n}}</p> -->
    <div v-for="(animal, animalIndex) in animals" :key="animalIndex">
      <h2>Animal ==> {{animal.name}}</h2>
      <h3>food</h3>
      <ul>
        <li v-for="(food, foodIndex) in animal.food" :key="foodIndex">{{food}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // fruits: ["banana", "strawberry", "apple", "melon"],
      // user:{
      //   name: 'scalper',
      //   age: 100,
      //   job: 'programmer'
      //}
      // 배열 안에 오브젝트가 요소로 들어감
      animals: [
        {name: 'monkey' , size: 'medium', food: ['banana', 'apple']},
        {name: 'lion' , size: 'big', food: ['deer', 'cow']},
        {name: 'rat' , size: 'small', food: ['small', 'rice']},
      ]
    };
  },
};
</script>

<style></style>

export default {
  mounted() {
    console.log("component using mixin mounted");
  },
  data() {
    return {
      totalMoney: 0,
    };
  },
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    },
  },
};

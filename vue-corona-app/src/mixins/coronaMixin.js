import axios from "axios";
const coronaMixin = {
  methods: {
    // method: get방식인지 post방식인지 구분하기 위함
    async fetchData(method, url, params) {
      const res = await axios[method](url, { params });
      return res.data;
    },
  },
};

export default coronaMixin;

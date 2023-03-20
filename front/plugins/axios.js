import axios from "axios";

export default axios.create({
  // 「baseURL」と指定した際に、環境変数のaPI_ENDPOINTの値を参照するようにする
  baseURL: process.env.API_ENDPOINT
})
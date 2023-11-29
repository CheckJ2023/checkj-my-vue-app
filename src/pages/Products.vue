<template>
<div class="product_background">
  <div class="product_container">
    <div v-for="p, index in data">
      <productCard 
        :productIndex="index"
        :productTitle="p.title"
        :productPhotoUrl="p.photoUrl"
        :productPrice = "p.price"
        :productDescription="p.description"
      />
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import productCard from '/src/components/Product-Card.vue';

export default {
  data() {
    return {
      username: '',
      toastMessage: '',

      data: [{
        title: '商店標題1',
        description: '商店描述1',
        price: '$ 價格',

      },],

      // isBuy: [],
        
    }
  },
  // Vue要使用的方法
  methods: {

  },
  mounted() {

    this.isBuy = Array(this.data.length).fill(false)

    // 取得網址列參數
    const queryString = window.location.search;
    // 解析參數列
    const parameters = new URLSearchParams(queryString);
    // 取得使用者名稱
    this.username = parameters.get('username');

    // 打API要商品資訊
    axios.get('http://localhost:8080/product')
      .then((response) => {
        // 處理API的response
        console.log("以下是response");
        console.log(response);

        if (response.status == 200) { // API呼叫成功 
          if (response.data.code == 0)  // 取的資料成功
            this.data = response.data.data; // 將商品資訊存到變數內
          else
            this.data = [];  // 清空資料
        }
      });
      
  },
  components : {
        productCard
  },
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400,700';

.product_background {
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background: #e3e3d8;
  font-family: 'Quicksand', sans-serif;
} 

.product_container {
  position:fixed;
  height:100%;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;

  justify-content: flex-start;
  z-index: 0;
  background: #e3e3d8;
  font-family: 'Quicksand', sans-serif;
  gap:5%;
}

</style>
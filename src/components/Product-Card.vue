<template>
    <div class="wrapper">
      <div class=container>
        <div class="top" :style="{ 'background-image': 'url(' + productPhotoUrl + ') ' }"></div>
        <!-- <div :class="['bottom', isBuy[index] ? 'clicked' : '']"> -->
        <div :class="['bottom', isBuy ? 'clicked' : '']">
          <div class="left">
            <div class="details">
              <h1 class="h1ProductTitleStyle">{{ productTitle }}</h1>
              <p class="pProductTitleStyle">{{ productPrice }}</p>
              <!-- <h1>{{ p.title }} ${{ p.price }}</h1> -->
            </div>
            <!-- <div class="buy" @click="toggleBuyStatus(index)"> -->
            <div class="buy" @click.prevent="isBuy = true">
              <i class="material-icons">add_shopping_cart</i>
            </div>
          </div>
          <div class="right">
            <div class="done"><i class="material-icons">done</i></div>
            <div class="details">
              <!-- <h1>{{ p.title }}</h1> -->
              <h1>Books</h1>
              <p>Added to your cart</p>
            </div>
            <!-- <div class="remove" @click="resetBuyStatus(index)"> -->
            <div class="remove" @click.prevent="isBuy = false "><i class="material-icons">clear</i></div>
          </div>
        </div>

        <div class="inside">
          <div class="icon"><i class="material-icons">info_outline</i></div>
          <div class="contents">

            <p class='description'>{{ productDescription }}</p>
          </div>
        </div>
      </div>
    </div>
    
  
</template>

<script>
import axios from 'axios';
export default {
  props : [
         "productIndex",
         "productTitle",
         "productPhotoUrl",
         "productPrice",
         "productDescription",
      ],
  data() {
    return {
      

      
      data: [{
        title: '商店標題1',
        description: '商店描述1',
        price: '$ 價格',

      },],

      // isBuy: [],
      isBuy : false,

    }
  },
  // Vue要使用的方法
  methods: {

    // toggleBuyStatus(index) {
    //   this.isBuy[index] = true;
    // },
    // resetBuyStatus(index) {
    //   this.isBuy[index] = false;
    // },

    onEdit(index) {
      this.showToast('已購買 ' + this.data[index].title);
    },
    onDelete(index) {
      this.showToast('onDelete: ' + this.data[index].title);
    },

  },
  mounted() {

    // this.isBuy = Array(this.data.length).fill(false)

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
  }
}
</script>

<style scoped>

@import 'https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400,700';

.wrapper {
  width: 300px;
  height: 500px;
  background: white;
  margin-right: 10%;
  margin-left: 10%;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  display: flex;
}

.wrapper:hover {
  transform: scale(1);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.wrapper .container {
  width: 100%;
  height: 100%;
}

.wrapper .container .top {
  height: 80%;
  width: 100%;
  
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;

}

.wrapper .container .bottom {
  width: 200%;
  height: 20%;
  transition: transform 0.5s;
}

.wrapper .container .bottom.clicked {
  transform: translateX(-50%);
}

.wrapper .container .bottom h1 {
  margin: 0;
  padding: 0;
}

.wrapper .container .bottom p {
  margin: 0;
  padding: 0;
}

.wrapper .container .bottom .h1ProductTitleStyle {
   font-size: 1.8em;
    margin: 0;
    padding: 0;
    margin-top: 3%;
    margin-bottom: 3%;
}

.wrapper .container .bottom .pProductTitleStyle {
    display: flex;
    justify-content: center ;
    width: fit-content;
    border-radius: 0.5em;
    font-size: 1.6em;
    font-weight: bold;
    color:#fff;
    background-color:#A6CDDE;
    margin: 0;
    padding: 0;

    padding: 0 5% 0 5%;
}

.wrapper .container .bottom .left {
  height: 100%;
  width: 50%;
  background: #f4f4f4;
  position: relative;
  float: left;
}

.wrapper .container .bottom .left .details {
  font-size: 0.6em;
  padding: 0px 0px 0px 20px;
  float: left;
  width: calc(70% - 40px);
}

.wrapper .container .bottom .left .buy {
  float: right;
  width: calc(30% - 2px);
  height: 100%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.wrapper .container .bottom .left .buy i {
  font-size: 30px;
  padding: 30px;
  color: #254053;
  transition: transform 0.5s;
}

.wrapper .container .bottom .left .buy:hover {
  background: #A6CDDE;
}

.wrapper .container .bottom .left .buy:hover i {
  transform: translateY(5px);
  color: #00394B;
}

.wrapper .container .bottom .right {
  width: 50%;
  background: #A6CDDE;
  color: white;
  float: right;
  height: 200%;
  overflow: hidden;
}

.wrapper .container .bottom .right .details {
  padding: 20px;
  float: right;
  width: calc(70% - 40px);
}

.wrapper .container .bottom .right .done {
  width: calc(30% - 2px);
  float: left;
  transition: transform 0.5s;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  height: 50%;

}

.wrapper .container .bottom .right .done i {
  font-size: 30px;
  padding: 30px;
  color: white;
}

.wrapper .container .bottom .right .remove {
  width: calc(30% - 1px);
  clear: both;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  height: 50%;
  background: #BC3B59;
  transition: transform 0.5s, background 0.5s;
  cursor: pointer;
}

.wrapper .container .bottom .right .remove:hover {
  background: #9B2847;
}

.wrapper .container .bottom .right .remove:hover i {
  transform: translateY(5px);
}

.wrapper .container .bottom .right .remove i {
  transition: transform 0.5s;
  font-size: 30px;
  padding: 30px;
  color: white;
}

.wrapper .container .bottom .right:hover .remove,
.wrapper .container .bottom .right:hover .done {
  transform: translateY(-100%);
}

.wrapper .inside {
  /* z-index: 9; */
  z-index: 1;
  background: #92879b;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
}

.wrapper .inside .icon {
  position: absolute;
  right: 85px;
  top: 85px;
  color: white;
  opacity: 1;
}

.wrapper .inside:hover {
  width: 100%;
  right: 0;
  top: 0;
  border-radius: 0;
  height: 80%;

}

.wrapper .inside:hover .icon {
  opacity: 0;
  right: 15px;
  top: 15px;
}

.wrapper .inside:hover .contents {
  opacity: 1;
  transform: scale(1);
  transform: translateY(0);
}

.wrapper .inside .contents {
  padding: 5%;
  opacity: 0;
  transform: scale(0.5);
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;

}

.wrapper .inside .contents table {
  text-align: left;
  width: 100%;
}

.wrapper .inside .contents h1,
.wrapper .inside .contents p,
.wrapper .inside .contents table {
  color: white;
}

.wrapper .inside .contents p {
  font-size: 15px;
}
</style>
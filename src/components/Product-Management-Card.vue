<template>
    <div class="wrapper">
            <div class=container>

                <div class="top" :style="{ 'background-image': 'url(' + p.photoUrl + ') ' }"></div>
                <!-- <div :class="['bottom', isBuy[index] ? 'clicked' : '']"> -->
                <div :class="['bottom', isSetting ? 'clicked' : '']">
                    <div class="left">
                        <div class="details">
                            <h1>{{ p.title }}</h1>
                            <p>{{ p.price }}</p>

                        </div>
                        <!-- <div class="buy" @click="toggleBuyStatus(index)"> -->
                        <div class="buy" @click="isSetting = true">
                            <i class="material-icons">menu_open</i>
                        </div>
                    </div>
                    <div class="right">
                        <div class="done"><i class="material-icons">done</i></div>
                        <div class="details">
                            <div class="select">
                                <div class="button" id="edit_button" @click="onEdit(index)">編輯</div>
                                <div class="button" id="delete_button" @click="onDelete(index)">刪除</div>
                            </div>
                        </div>
                        <!-- <div class="remove" @click="resetBuyStatus(index)"><i class="material-icons">clear</i></div> -->
                        <div class="remove" @click="isSetting = false"><i class="material-icons">clear</i></div>
                    </div>
                </div>

                <div class="inside">
                    <div class="icon"><i class="material-icons">info_outline</i></div>
                    <div class="contents">

                        <p class='description'>{{ p.description }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            toastMessage: '',

            data: [{
                title: '商店標題',
                description: '商店描述',
                price: '$ 價格',

            },],



            // 新增商品用的資料結構

            newProduct: {
                photoUrl: '',
                title: '',
                description: '',
                price: 0,
                storeUrl: '',
                storeName: '',
            },

            editedProduct: [],


            isSetting: true,
            isBuy: [],
            dataEditMode: [],
            isShowForm: false, // 控制新增表單是否要出現
            isShowEditForm: false,
            isShowToast: false,
            isShowModel_forDelete: false, // 控制對話盒的顯示
            isShowModel_forEdit: false, // 控制對話盒的顯示
            prepareOnDeleteIndex: -1, // 預計要刪除的資料index
            prepareOnEditIndex: -1, // 預計要編輯的資料index

            // data: [], // 存放商品清單的變數
        }
    },
    // Vue要使用的方法
    methods: {

        //購買資料相關方法
        toggleBuyStatus(index) {
            this.isBuy[index] = true;
        },
        resetBuyStatus(index) {
            this.isBuy[index] = false;
        },

        //編輯相關方法
        onEdit(index) {
            // this.showToast('onEdit: ' + this.data[index].productId);
            this.editedProduct[index] = JSON.parse(JSON.stringify(this.data[index]));

            this.isShowEditForm = true;
            this.prepareOnEditIndex = index;

        },
        // onCancelEdit(index) {
        //   // this.dataEditMode[index] = false; // 離開編輯模式
        //   this.isShowEditForm = false;
        // },
        confirmEdit() {
            // alert(this.editedProduct[this.prepareOnEditIndex].title);
            // this.showToast('onEdit: ' + this.data[this.prepareOnEditIndex].productId);

            // this.onCancelEdit(index);
            // 呼叫Update product API
            //  console.log(this.editedProduct[this.prepareOnEditIndex]);
            axios.put('http://localhost:8080/product', this.editedProduct[this.prepareOnEditIndex])
                .then((response) => {
                    console.log(response.data.code);
                    if (response.status == 200 && response.data.code == 0) {// 更新成功
                        // 更新原本的資料畫面
                        // this.data[this.prepareOnEditIndex] = this.editedProduct;
                        this.data[this.prepareOnEditIndex] = this.editedProduct[this.prepareOnEditIndex];

                        // 成功再離開編輯模式
                        // this.onCancelEdit(this.prepareOnEditIndex);

                        this.showToast('更新 ' + this.data[this.prepareOnEditIndex].productId + ' 成功');
                        this.isShowEditForm = false;
                        this.isShowModel_forEdit = false;
                        this.prepareOnEditIndex = -1;
                    } else {
                        this.showToast('更新 ' + this.data[this.prepareOnEditIndex].productId + ' 失敗');
                    }
                });

        },


        //刪除資料相關的方法
        onDelete(index) {
            // this.showToast('準備刪除商品 '+this.data[index].productId);
            this.isShowModel_forDelete = true;
            this.prepareOnDeleteIndex = index; // 紀錄準備要刪除的index
        },
        confirmDelete() {
            // 呼叫刪除商品的API
            axios.delete('http://localhost:8080/product/' + this.data[this.prepareOnDeleteIndex].productId)
                .then((response) => {
                    if (response.status == 200 && response.data.code == 0) {
                        this.showToast('刪除 ' + this.data[this.prepareOnDeleteIndex].productId + ' 成功');

                        // 從網頁上移除已經刪除的商品資料
                        this.data.splice(this.prepareOnDeleteIndex, 1);
                    } else {
                        this.showToast('刪除 ' + this.data[this.prepareOnDeleteIndex].productId + ' 失敗');
                    }

                    // this.data.pop(JSON.parse(JSON.stringify(this.newProduct)));
                    this.isShowModel_forDelete = false;
                    this.prepareOnDeleteIndex = -1; // 紀錄準備要刪除的index
                });
        },

        // 送出要新增的商品資料
        onSend() {
            axios.post('http://localhost:8080/product', this.newProduct)
                .then((response) => {
                    // 打API成功
                    if (response.status == 200 && response.data.code == 0) {
                        // alert('新增資料成功');
                        this.showToast('新增資料成功');

                        // 將新增的資料丟給畫面顯示
                        // this.data.push(this.newProduct);
                        // 新增且更新畫面用的資料以及刷新畫面 
                        // this.data.push(JSON.parse(JSON.stringify(this.newProduct)));
                        // this.$set(this.data, this.data.length, JSON.parse(JSON.stringify(this.newProduct)));
                        axios.get('http://localhost:8080/product')
                            .then((response) => {

                                if (response.status == 200) { // API呼叫成功 
                                    if (response.data.code == 0)  // 取的資料成功
                                        this.data = response.data.data; // 將商品資訊存到變數內
                                    else
                                        this.data = [];  // 清空資料
                                }
                            });
                    } else {
                        alert('新增資料失敗');
                    }
                });
            // 隱藏對話框
            this.isShowForm = false;
        },
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
    }
}
</script>

<style scoped>

@import 'https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400,700';

.wrapper {
  width: 300px;
  height: 500px;
  background: white;
  margin: 2%;
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
<template>
    <div class="product_background">
        <div class="toast" v-if="isShowToast">{{ toastMessage }}</div>

        <div class="add-btn" @click="isShowForm = true">
            <img src="src/assets/plus.svg" style="width: 100%;" />
        </div>

        <!-- <div class="nav-bar">
        <button type="text" class="submit" @click="isShowForm = true">新增商品</button>
        </div> -->

        <div class="product_container">
            <div v-for="p, index in data">
                <productManagementCard
                :productIndex="index"
                :productTitle="p.title"
                :productPhotoUrl="p.photoUrl"
                :productPrice = "p.price"
                :productDescription="p.description"

                @onEdit="onEdit(index)"
                @onDelete="onDelete(index)"

                @onSettingMode="isSetting=true"
                @notOnSettingMode="isSetting=false"
                :isSetting="isSetting"
                />
            </div>
        </div>


        <div class="mask" v-if="isShowForm || isShowEditForm"></div>

        <!-- add -->
        <div v-if="isShowForm">
            <productAddingCard 
                :newProductTitle="newProduct.title"
                :newProductPhotoUrl="newProduct.photoUrl"
                :newProductDescription="newProduct.description"
                :newProductPrice="newProduct.price"
                :newProductStoreName="newProduct.storeName"
                :newProductStoreUrl="newProduct.storeUrl"
                @update:newProductTitle="newProduct.title = $event"
                @update:newProductPhotoUrls="newProduct.photoUrl = $event"
                @update:newProductDescription="newProduct.description = $event"
                @update:newProductPrice="newProduct.price = $event"
                @update:newProductStoreName="newProduct.storeName = $event"
                @update:newProductStoreUrl="newProduct.storeUrl = $event"

                @onSend="onSend(index)"
                @isNotShowForm="isShowForm = false"
            />
        </div>

        <!-- Edit -->
        <div v-if="isShowEditForm">
            <productEditingCard 
                :EditProductID="editedProduct[prepareOnEditIndex].productId"
                :EditProductTitle="editedProduct[prepareOnEditIndex].title"
                :EditProductPhotoUrl="editedProduct[prepareOnEditIndex].photoUrl"
                :EditProductDescription="editedProduct[prepareOnEditIndex].description"
                :EditProductPrice="editedProduct[prepareOnEditIndex].price"
                :EditProductStoreName="editedProduct[prepareOnEditIndex].storeName"
                :EditProductStoreUrl="editedProduct[prepareOnEditIndex].storeUrl"
                @update:EditProductTitle="editedProduct[prepareOnEditIndex].title = $event"
                @update:EditProductPhotoUrls="editedProduct[prepareOnEditIndex].photoUrl = $event"
                @update:EditProductDescription="editedProduct[prepareOnEditIndex].description = $event"
                @update:EditProductPrice="editedProduct[prepareOnEditIndex].price = $event"
                @update:EditProductStoreName="editedProduct[prepareOnEditIndex].storeName = $event"
                @update:EditProductStoreUrl="editedProduct[prepareOnEditIndex].storeUrl = $event"

                @isShowModelForEdit="isShowModel_forEdit = true"
                @isNotShowForm="isShowEditForm = false"
            />
        </div>
        

        <!-- 純手工對話盒 -->
        <div v-if="isShowModel_forDelete">
            <DoubleCheckBox
            modelMessage = "確定要刪除資料嗎?"
            @isNotShowModel="isShowModel_forDelete = false"
            @confirm="confirmDelete()"
            />
        </div>
    
        
        
        <div v-if="isShowModel_forEdit">
            <DoubleCheckBox
            modelMessage = "確定要更改資料嗎?"
            @isNotShowModel="isShowModel_forEdit = false"
            @confirm="confirmEdit()"
            />
        </div>

    </div>
    
</template>

<script>
import axios from 'axios';
import productManagementCard from "/src/components/Product-Management-Card.vue";
import productAddingCard from "/src/components/Product-Adding-Card.vue";
import productEditingCard from "/src/components/Product-Editing-Card.vue";
import DoubleCheckBox from "/src/components/DoubleCheck-Box.vue";

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
            console.log("prepareOnEditIndex="+this.prepareOnEditIndex);
             console.log("this.editedProduct="+this.editedProduct[this.prepareOnEditIndex].title);
             
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
        showToast(msg) {
            this.isShowToast = true;
            this.toastMessage = msg;

            setTimeout(() => {
                this.isShowToast = false;
            }, 2000);
        }
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
    components:{
        productManagementCard,
        productAddingCard,
        productEditingCard,
        DoubleCheckBox
    }

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

/* ------------ */
/*   product    */
/* ------------ */
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
  /* padding:5%; */
  gap:5%;
}




/* ------------ */
/*    OTHERS    */
/* ------------ */

/* .nav-bar {
  width: 100px;
  align-self: flex-end;
  margin-right: 20px;
} */

.mask {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #000a;
    z-index: 1;
}

.add-btn {
    width: 50px;
    height: 50px;
    max-height: 50px;
    max-width: 50px;
    background-color: #06b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    padding: 0;
    /* padding-bottom: 2px; */
    text-decoration: none;
    gap: 0;
    border: 0;

    border-radius: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;

    z-index: 1;
}

.add-btn:hover {
    background-color: #08d;
}

.toast {
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    margin: auto;
    color: white;
    background-color: #00aa00;
    font-size: 2em;
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    position: fixed;
    top: 10px;
    z-index: 10;
}
</style>
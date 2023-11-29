<template>
 <div class="model-container">
        <div class="model-title">提醒</div>
        <div class="model-content">
            <img class="model-icon"
                src="https://static.vecteezy.com/system/resources/previews/000/440/213/non_2x/question-mark-vector-icon.jpg" />
            <div class="model-message">{{modelMessage}}</div>
        </div>
        <div class="model-content">
            <div class="model-cancel" @click="$emit('isNotShowModel')">取消</div>
            <div class="model-ok" @click="$emit('confirm')">確定</div>
        </div>
    </div>

    <!-- <div class="model-container">
        <div class="model-title">提醒</div>
        <div class="model-content">
            <img class="model-icon"
                src="https://static.vecteezy.com/system/resources/previews/000/440/213/non_2x/question-mark-vector-icon.jpg" />
            <div class="model-message">確定要更改資料嗎?</div>
        </div>
        <div class="model-content">
            <div class="model-cancel" @click="$emit('isNotShowModel')">取消</div>
            <div class="model-ok" @click="$emit('confirm')">確定</div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios';
export default {
      props : [
        //  "newProductIndex",
         "modelMessage"
      ],
    data() {
        return {

  
        }
    },
    // Vue要使用的方法
    methods: {

    },
    mounted() {
    }
}
</script>

<style scoped>

/* -----------------*/
/*    手工對話盒子   */
/* -----------------*/
.model-container {
    display: flex;
    position: fixed;
    width: 400px;
    border-width: 1px;
    border-color: black;
    border-radius: 20px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    height: fit-content;
    flex-direction: column;
    background-color: white;
    padding-bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    z-index: 1;
}

.model-title {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 20px;
    font-size: 1.5em;
    font-weight: 800;
    color: white;
    background-color: rgb(161, 109, 129);
}

.model-content {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 20px;
    gap: 20px;
    justify-content: center;
}

.model-icon {
    width: 32px;
    height: 32px;
    margin: 20px;
    margin-right: 0px;
    background-color: #a82545;
}

.model-message {
    width: 100%;
    color: #202932;
}

.model-cancel,
.model-ok {
    color: white;
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
}

.model-cancel {
    background-color: #be7b8c;
}

.model-ok {
    background-color: rgb(94, 135, 138);
}

</style>
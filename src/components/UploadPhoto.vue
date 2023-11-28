<template>
    <div class="upload-photo-container">
        <input type="file" @change="onFileChange($event)">

    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        onFileChange($event) {
            console.log($event.target.files[0].name);

            // 準備資料
            const formData = new FormData();
            // 這個files名稱必須跟後端接收參數時設定的名字一樣，否則後端會收不到資料
            formData.append('files', $event.target.files[0]);

            // 定義API header
            const header = {
                'Content-Type': 'multipart/form-data'
            }

            // 呼叫API
            axios.post('http://localhost:8080/file', formData, {}, header)
                .then((response) => {
                    console.log(response);
                });

        }
    }
}
</script>

<style scoped>
.upload-photo-container {
    display: flex;
    position: relative;
    width: 350px;
    height: 200px;

    background-color: aquamarine;
}
</style>
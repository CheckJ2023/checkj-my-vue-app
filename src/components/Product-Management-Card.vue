<template>
    <div class="wrapper">
            <div class=container>

                <div class="top" :style="{ 'background-image': 'url(' + productPhotoUrl + ') ' }"></div>
                <div :class="['bottom', isSetting ? 'clicked' : '']">
                    <div class="left">
                        <div class="details">
                            <h1>{{ productTitle }}</h1>
                            <p>{{ productPrice }}</p>

                        </div>
                        <div class="buy" @click="$emit('onSettingMode')">
                            <i class="material-icons">menu_open</i>
                        </div>
                    </div>
                    <div class="right">
                        <div class="done"><i class="material-icons">done</i></div>
                        <div class="details">
                            <div class="select">
                                <!-- <div class="button" id="edit_button" @click="onEdit(index)">編輯</div>
                                <div class="button" id="delete_button" @click="onDelete(index)">刪除</div> -->
                                <div class="button" id="edit_button" @click="$emit('onEdit')">編輯</div>
                                <div class="button" id="delete_button" @click="$emit('onDelete')">刪除</div>
                            </div>
                        </div>
                        <div class="remove" @click="$emit('notOnSettingMode')"><i class="material-icons">clear</i></div>
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
// import axios from 'axios';
export default {
      props : [
         "productIndex",
         "productTitle",
         "productPhotoUrl",
         "productPrice",
         "productDescription",
         "isSetting"
      ],
    data() {
        return {
            data: [{
                title: '商店標題',
                description: '商店描述',
                price: '$ 價格',

            },],
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
    /* background: url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg)
        no-repeat center center; */

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
    font-size: 1.2em;
    margin: 0;
    padding: 0;
}

.wrapper .container .bottom p {
    display: flex;
    justify-content: center ;
    width: fit-content;
    border-radius: 0.5em;
    font-size: 1em;
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

/* .wrapper .container .bottom .right .details {
  padding: 20px;
  float: right;
  width: calc(70% - 40px);
} */

.wrapper .container .bottom .right .details .select {

    padding: 0px;
    /* margin-left:auto; */
    display: flex;
    /* flex-wrap: wrap; */
    /* gap: 10px; */
    width: calc(70% - 40px);

}

.wrapper .container .bottom .right .details .select .button {
    padding: 24% 17% 24% 17%;
    line-height: 1;
    display: inline-block;
    font-size: 1.2rem;
    text-decoration: none;
    /* border-radius: 5px; */
    color: #fff;
    background-color: #4b908f;
    min-width: 50px;
    text-align: center;
    cursor: pointer;
}

.wrapper .container .bottom .right .details .select .button #edit_button {}

.wrapper .container .bottom .right .details .select .button:hover {
    background-color: yellowgreen;
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
    transform: translateY(-101%);
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
<template>
     <div class='add-box' >
        <div class='box-form'>
            <div class='box-login-tab'></div>
            <div class='box-login-title'>
                <div class='i i-login'></div>
                <h2>新增商品</h2>
            </div>
            <div class='box-login'>
                <div class='fieldset-body' id='login_form'>
                    <button onclick="openLoginInfo();" class='b b-form i i-more' title='Mais Informações'></button>
                    <p class='field'>
                        <label for='user'>商品名稱</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductTitle" /> -->
                        <input class="input" type='text' id='user' name='user' title='Username' 
                        :value="newProductTitle" @input="$emit('update:newProductTitle', $event.target.value)"/>
                        <span id='valida' class='i i-warning'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商品URL</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductPhotoUrl" /> -->
                        <input class="input" type='text' id='user' name='user' title='Username' 
                        :value="newProductPhotoUrl" @input="$emit('update:newProductPhotoUrls', $event.target.value)"/>
                        <span id='valida' class='i i-close'></span>
                    </p>
                    
                    <p class='field'>
                        <label for='pass'>價格</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductPrice" /> -->
                        <input class="input" type='text' id='user' name='user' title='Username' 
                        :value="newProductPrice" @input="$emit('update:newProductPrice', $event.target.value)"/>
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商店名稱</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductStoreUrl" /> -->
                        <input class="input" type='text' id='user' name='user' title='Username' 
                        :value="newProductStoreUrl" @input="$emit('update:newProductStoreUrl', $event.target.value)"/>
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商店URL</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductStoreName" /> -->
                        <input class="input" type='text' id='user' name='user' title='Username' 
                        :value="newProductStoreUrl" @input="$emit('update:newProductStoreUrl', $event.target.value)"/>
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商品描述</label>
                        <!-- <input type='text' id='user' name='user' title='Username' v-model="newProductDescription" /> -->
                        <textarea class="input-textarea" type='text' id='user' name='user' title='Username' 
                        :value="newProductDescription" @input="$emit('update:newProductDescription', $event.target.value)"/>
                        <span id='valida' class='i i-close'></span>
                    </p>

                    <!-- <label class='checkbox'>
            <input type='checkbox' value='TRUE' title='Keep me Signed in' /> Keep me Signed in
          </label> -->

                    <div class="submit-button-container">
                    <!-- <input type='submit' id='do_login' value='新增' title='Get Started' @click="onSend()" />
                    <input type='submit' id='leaves' value='取消' title='Get Started' @click="isShowForm = false" /> -->
                    <input type='submit' id='do_login' value='新增' title='Get Started' @click="$emit('onSend')" />
                    <input type='submit' id='leaves' value='取消' title='Get Started' @click="$emit('isNotShowForm')" />
                    </div>  
                </div>
            </div>
        </div>
        <!-- <div class='box-info'>
    <p><button onclick="closeLoginInfo();" class='b b-info i i-left' title='Back to Sign In'></button>
    <h3>Need Help?</h3>
    </p>
    <div class='line-wh'></div>
    <button onclick="" class='b-support' title='Forgot Password?'> Forgot Password?</button>
    <button onclick="" class='b-support' title='Contact Support'> Contact Support</button>
    <div class='line-wh'></div>
    <button onclick="" class='b-cta' title='Sign up now!'> CREATE ACCOUNT</button>
  </div> -->
    </div>
</template>


<script>
import axios from 'axios';
export default {
      props : [
        //  "newProductIndex",
         "newProductTitle",
         "newProductPhotoUrl",
         "newProductPrice",
         "newProductDescription",
         "newProductStoreUrl",
         "newProductStoreName"
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
@import 'https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400,700';

/* Login Box */


.add-box, .edit-box {
  width: 330px;
  position: fixed;
  top: 10vw;
  left: 50%;
  
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  z-index: 1;
}

.box-form {
  width: 500px;
  position: fixed;
  /* z-index: 1; */
  z-index: 5;
  overflow: hidden;
}

.box-login-tab {
	width: 50%;
	height: 40px;
	background: #fdfdfd;
	position: relative;
	float: left;
	/* z-index: 1; */
  z-index: 5;
  
  -webkit-border-radius: 6px 6px 0 0;
     -moz-border-radius: 6px 6px 0 0;
          border-radius: 6px 6px 0 0;
  
	-webkit-transform: perspective(5px) rotateX(0.93deg) translateZ(-1px);
	        transform: perspective(5px) rotateX(0.93deg) translateZ(-1px);
	-webkit-transform-origin: 0 0;
	        transform-origin: 0 0;
	-webkit-backface-visibility: hidden;
	        backface-visibility: hidden;
	
	-webkit-box-shadow: 15px -15px 30px rgba(0,0,0,0.32);
     -moz-box-shadow: 15px -15px 30px rgba(0,0,0,0.32);
          box-shadow: 15px -15px 30px rgba(0,0,0,0.32);
}

.box-login-title {
  margin-left: 3%;
  font-size:0.70em;
	width: 35%;
	height: 40px;
	position: absolute;
	float: left;
	/* z-index: 2; */
  z-index: 6;
  color:brown;
}

.box-login {
  position: relative;
  top: -4px;
  width: 320px;
  background: #fdfdfd;
  text-align: center;
  overflow: hidden;
  /* z-index: 2; */
  z-index: 6;
  
  -webkit-border-top-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-topright: 6px;
  -moz-border-radius-bottomleft: 6px;
  -moz-border-radius-bottomright: 6px;
   border-top-right-radius: 6px;
   border-bottom-left-radius: 6px;
   border-bottom-right-radius: 6px;
  
  -webkit-box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
     -moz-box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
          box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
}

.box-info {
	width: 260px;
	top: 60px;
  position: absolute;
	right: -5px;
	padding: 15px 15px 15px 30px;
	background-color: rgba(255,255,255,0.6);
	border: 1px solid rgba(255,255,255,0.2);
	/* z-index: 0; */
  z-index: 4;
	
	-webkit-border-radius: 6px;
     -moz-border-radius: 6px;
          border-radius: 6px;
    
    -webkit-box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
    -moz-box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
    box-shadow: 15px 30px 30px rgba(0,0,0,0.32);
    overflow: hidden;
}

.line-wh {
 	width: 100%;
  height: 1px;
  top: 0px;
  margin: 12px auto;
	position: relative;
	border-top: 1px solid rgba(255,255,255,0.3);
}


/* Form */


a { text-decoration: none; }

button:focus { outline:0; }

.b {
	height: 24px;
	line-height: 24px;
	background-color: transparent;
  border: none;
  cursor: pointer;
}

.b-form {
	opacity: 0.5;
	margin: 10px 20px;
  float: right;
}

.b-info {
  opacity: 0.5;
  float: left;
}

.b-form:hover, 
.b-info:hover {
  opacity: 1;
}

.b-support, .b-cta {
	width: 100%;
	padding: 0px 15px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
    
  -webkit-border-radius: 16px;
     -moz-border-radius: 16px;
          border-radius: 16px;
}

.b-support {
  border: #87314e 1px solid;
  background-color: transparent;
  color: #87314e;
  margin: 6px 0;
}

.b-cta {
  border: #df405a 1px solid;
  background-color: #df405a;
  color: #fff;
}

.b-support:hover, .b-cta:hover {
  color: #fff;
	background-color: #87314e;
	border: #87314e 1px solid;
}

.fieldset-body {
    display: table;
}

.fieldset-body p {
    width: 100%;
    display: inline-table;
    padding: 5px 20px;
    margin-bottom:2px;
}

label {
	float: left;
  width: 100%;
	top: 0px;
	color: #032942;
	font-size: 13px;
	font-weight: 700;
	text-align: left;
	line-height: 1.5;
}

label.checkbox {
	float: left;
  padding: 5px 20px;
	line-height: 1.7;
}

.input-textarea[type=text] {
    width: 80%;
    height: 100px;
    padding: 0px 10px;
    background-color: rgba(0,0,0,0.03);
    border: none;
    display: inline;
    color: #303030;
    font-size: 16px;
    font-weight: 400;
    float: left;
    
    -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    -moz-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    margin-bottom: 5%;
}

.input[type=text],
.input[type=password] {
    width: 80%;
    height: 32px;
    padding: 0px 10px;
    background-color: rgba(0,0,0,0.03);
    border: none;
    display: inline;
    color: #303030;
    font-size: 16px;
    font-weight: 400;
    float: left;
    
    -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    -moz-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
    box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
}

.input[type=text]:focus,
.input[type=password]:focus
.input-textarea {
    background-color: #f8f8c6;
    outline: none;
}

.submit-button-container{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
}

input[type=submit]  {
  width: 100%;
  height: 48px;
  /* margin-top: 24px; */
  /* margin-top: 1%; */
  padding: 0px 20px;
  font-family: 'Quicksand', sans-serif;
	font-weight: 700;
	font-size: 18px;
	color: #fff;
  line-height: 40px;
  text-align: center;
  background-color: #317a87;
	border: 1px #317a87 solid;
	opacity: 1;
	cursor: pointer;
}

input[type=submit]:hover {
	background-color: #5b98a3;
  border: 1px #5b98a3 solid;
}

input[type=submit]:focus {
	outline: none;
}

input#leaves {
  background-color: #87314e;
	border: 1px #87314e solid;
}

input#leaves:hover {
	background-color: #df405a;
  border: 1px #df405a solid;
}

input#leaves:focus {
	outline: none;
}

p.field span.i {
	width: 24px;
  height: 24px;
  float: right;
  position: relative;
  margin-top: -26px;
  right: 2px;
  /* z-index: 2; */
  z-index: 6;
  display: none;
            
  -webkit-animation: bounceIn 0.6s linear;
     -moz-animation: bounceIn 0.6s linear;
  	   -o-animation: bounceIn 0.6s linear;
          animation: bounceIn 0.6s linear;
}

</style>

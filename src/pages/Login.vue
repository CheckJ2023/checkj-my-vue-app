


<template>
 
  <nightbackground class="login_background">

  <div class="container">
    
    <section> 
   <div class="signin"> 

    <div class="content"> 

     <!-- <h2>Sign In</h2>  -->
     <h2>會員登入</h2>

     <div class="form"> 

      <div v-if="isShowLoginError" class="login-failed">{{ message }}</div>

      <div class="inputBox"> 

       <!-- <input type="text" required> <i>Username</i>  -->
       <input v-model="username" type="text" name="username" required> <i>帳號 </i> 

      </div> 

      <div class="inputBox"> 

       <!-- <input type="password" required> <i>Password</i>  -->
       <input v-model="pwd" type="password" name="pwd" required> <i>密碼</i>

      </div> 
      

      <!-- <div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>  -->
      <div class="links"> <a href="#">忘記密碼?</a> <a href="#">註冊</a> 

      </div> 

      <!-- <div>{{ message }}</div>
      <button @click="count++">
        Count is: {{ count }}
      </button> -->

      <!-- <div @click="clickEvent()" class="inputBox">  -->
      <div class="inputBox"> 
       <!-- <input type="submit" value="Login" @click="login()">  -->
       <input type="submit" value="登入" @click="login()"> 
      </div> 

     </div> 

    </div> 

   </div> 

  </section> <!-- partial --> 
  
</div>
</nightbackground>
</template>

<script>
import axios from 'axios';
import nightbackground from '/src/components/CityNightViewBackground.vue';

export default {

  data() {
    return {
      count: 0,
      message: "",
      username: '',
      pwd: '',
      isShowLoginError: false,
    }
  }

  // Vue要使用的方法
  , methods: {
    // clickEvent() {
    //   alert('Hi Vue');
    // },
    login() {
      console.log("login");
      console.log(this.username);
      console.log(this.pwd);

      // 串接登入API
      // cannot use https ?!
      axios.get('http://localhost:8080/login?username=' + this.username + '&password=' + this.pwd)
        .then((response) => {
          console.log(response);


          // 處理API的回應
          if (response.status == 200) {
            console.log('呼叫API成功');
            if (response.data.code > 0) { // 登入失敗
              console.log('登入失敗:' + response.data.message);
              this.isShowLoginError = true;
              this.message = '登入失敗:' + response.data.message;
            } else {
              console.log('登入成功');
              this.message = '登入成功'
              location.href = 'http://localhost:5173/products';   // 跳轉網頁
            }
          }
        });
    }
  },
  components: {
    nightbackground,
  }
}

</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.login_backgound{
  height: 100vh;
  width:100vh;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  overflow: scroll;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
}

section {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
}

section .signin {
  position: absolute;
  width: 400px;
  background: rgb(241, 241, 230);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 9);
}

section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}

section .signin .content h2 {
  font-size: 2em;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}

section .signin .content .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section .signin .content .form .inputBox {
  position: relative;
  width: 100%;
}

section .signin .content .form .inputBox input {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 1em;
}

section .signin .content .form .inputBox i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}

.signin .content .form .inputBox input:focus~i,
.signin .content .form .inputBox input:valid~i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: rgb(73, 73, 73);
}

.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.signin .content .form .links a {
  color: grey;
  text-decoration: none;
}

.signin .content .form .links a:nth-child(2) {
  color: grey;
  font-weight: 600;
}

.signin .content .form .inputBox input[type="submit"] {
  padding: 10px;
  background: #87314e;
  color: white;
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
}

input[type="submit"]:active {
  opacity: 0.6;
}

@media (max-width: 900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

@media (max-width: 600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
}

.login-failed {
  color: darkred;
  display: flex;
  justify-content: center;

}
</style>
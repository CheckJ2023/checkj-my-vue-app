<template>
    <div class='edit-box' v-if="isShowEditForm">
        <div class='box-form'>
            <div class='box-login-tab'></div>
            <div class='box-login-title'>
                <div class='i i-login'></div>
                <h2> 商品編號{{ editedProduct[prepareOnEditIndex].productId }}</h2>
            </div>
            <div class='box-login'>
                <div class='fieldset-body' id='login_form'>
                    <button onclick="openLoginInfo();" class='b b-form i i-more' title='Mais Informações'></button>
                    <p class='field'>
                        <label for='user'>商品名稱</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].title" />
                        <span id='valida' class='i i-warning'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商品URL</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].photoUrl" />
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商品描述</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].description" />
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>價格</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].price" />
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商店名稱</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].storeUrl" />
                        <span id='valida' class='i i-close'></span>
                    </p>
                    <p class='field'>
                        <label for='pass'>商店URL</label>
                        <input type='text' id='user' name='user' title='Username'
                            v-model="editedProduct[prepareOnEditIndex].storeName" />
                        <span id='valida' class='i i-close'></span>
                    </p>

                    <input type='submit' id='do_login' value='修改' title='Get Started' @click="isShowModel_forEdit = true" />
                    <input type='submit' id='leaves' value='取消' title='Get Started' @click="isShowEditForm = false" />

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
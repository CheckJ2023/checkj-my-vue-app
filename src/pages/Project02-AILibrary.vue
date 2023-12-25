<template>
    <div class="container-fluid" style="margin-right: 0;">
        
        <!-- <div id="carouselExampleCaptions" class="carousel slide" style="overflow: hidden; margin: 0;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active"> -->
                    
                    <div class="bg-dark">
                        <!-- <img src="/src/assets/indbg.jpg" 
                        style="height: 300px; overflow: hidden;" 
                        class="d-block mx-auto w-40"
                        alt="..."> -->
                    
                        <div class="header-img d-block"></div>
                    </div>
                    <!-- <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/japan2.jpg" style="height: 300px; overflow: hidden;" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/japan3.jpg" style="height: 300px; overflow: hidden;" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->

        <div class="row">
            <div class="col-3 d-none d-md-flex flex-column myborder">
                <!-- <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-success">Success</button> -->
                <img src="/src/assets/VeryCodeLogo_nobackground.png" class="card-img-top p-5"
                    style="width: 100%; height: fit-content; object-fit: cover;" alt="...">
                <h3 class="mb-5 d-flex justify-content-center">MENU</h3>

                <p><a class="menu-btn" href="/">HOME</a></p>
 

                <!-- <div class="d-flex flex-row justify-content-center align-items-center mt-5">
                    <button type="button" class="btn btn-primary me-3" style="height: 40px">Primary</button>
                    <button type="button" class="btn btn-success justify-content-center align-items-center" style="height: 40px">Success</button>
                </div> -->
            </div>

            <div class="col-12 col-md-9">
                <h2 class="mt-5 ps-3">AI線上圖書館網站</h2>
                <div class="col-12 col-md-9 p-3">
                    <a type="button" class="btn btn-primary" href="http://34.30.165.251">
                        網頁連結
                    </a>
                </div>
                
                <div class="row">
                    <div class="col-12 col-md-12 p-5 text-start " style="height: fit-content;">
                        <!-- <img src="/src/assets/japan.jpg" style="width: 100%; height: 100%; object-fit: cover;" /> -->
                        
                        <h4>技術堆疊</h4>
                        <br/>
                        <!-- <h6>2023-11-01</h6> -->
                        <div class="ps-1">
                            
                            <h7>前端</h7>
                            <ul>
                                <li>Vue.js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <h7>後端</h7>
                            <ul>
                                <li>Spring Boot (Java框架)</li>
                                <li>Java</li>
                                <li>MySQL（資料庫）</li>
                            </ul>
                        </div>
                        <br/>
                        <h4>專案描述</h4>
                        <br/>
                            <p class="ps-3">AI線上圖書館網站旨在利用ChatGPT提供更智能、便捷的圖書管理和閱讀體驗。系統結合前後端分離架構，以及豐富的AI功能，提供用戶一個多元且高效的線上閱讀平台。</p>
                        <br/>
                        <h4>主要功能</h4>
                        <br/>
                            <ul>
                                <li>智能搜尋與推薦： 利用ChatGPT實現智能搜尋和書籍推薦功能，提高用戶發現新書的機會。</li>
                                <li>用戶管理系統： 提供註冊、登入、個人書櫃等功能，以個性化用戶體驗。</li>
                                <li>ChatGPT說書功能： 未來將整合ChatGPT，使用戶能夠透過對話的形式獲得書籍推薦和解讀，提升閱讀互動性。</li>
                            </ul>
                        <br/>
                        <h4>技術亮點</h4>
                        <br/>
                            <ul>
                                <li>AI整合： 利用機器學習和自然語言處理，使系統更好地理解用戶需求和提供個性化服務。</li>
                                <li>前後端分離： 提高開發效率，實現更好的代碼結構和模組化管理。</li>
                                <li>資料庫管理： 使用MySQL有效地管理書籍、用戶和相關統計信息。</li>
                            </ul>
                        <br/>
                        <h4>結語</h4>
                        <br/>
                        <p class="ps-3">AI線上圖書館網站是一個結合了先進技術和豐富功能的專案，未來有機會進一步擴充整合ChatGPT的說書功能，以提供使用者更加豐富的閱讀體驗。在這次的專案協作中，展現了我在Vue.js、Spring Boot、Java和MySQL全端的技能和經驗。不論是前端串接API呼叫資料庫CRUD、整合ChatGPT的function call以實現自動搜索資料庫圖書資料、還是簡易的token驗證，都有了相應的實踐。期待未來能進一步優化和擴展這個項目，以提供更多價值給使用者。</p>
                    
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- <h1>設定</h1> -->
        <!-- <div class="row">
            <img class="col-3" src="/src/assets/japan.jpg" />
            <img class="col-3" src="/src/assets/japan.jpg" />
            <img class="col-3" src="/src/assets/japan.jpg" />
            
            <div class="col-3 text-primary">
                Hi
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-success">Success</button>
            </div>
        </div> -->

        <!-- footer -->


        <!-- 側邊選單 -->
        <div class="d-md-none" style="position: fixed; top: 10px; left: 10px; z-index: 1" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">
            <img style="
            height:2em; width:2em; 
            border-radius: 0.5em; 
            background-color: aliceblue;
            border-style: solid;
            border-color:coral;" src="/src/assets/VeryCodeLogo_nobackground.png" />
        </div>

        <div class="d-md-none offcanvas offcanvas-start"  data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header d-flex justify-content-center">
                <!-- <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">MENU</h5> -->
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                    <img src="/src/assets/VeryCodeLogo_nobackground.png" class="card-img-top p-0 mb-5"
                        style="width: 100%; height: 150px; object-fit: cover;" alt="...">
                    
                        <p><a class="menu-btn" href="/">HOME</a></p>

                    <!-- <button type="button" class="btn btn-primary m-3">Primary</button>
                    <button type="button" class="btn btn-success">Success</button> -->
            </div>
        </div>

    </div>

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z">
            </path>
        </symbol>
        <!-- <symbol id="facebook" viewBox="0 0 16 16">
            <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
            <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
            <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </symbol> -->
    </svg>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap" />
                    </svg>
                </a>
                <!-- <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span> -->
                <span class="mb-3 mb-md-0 text-body-secondary">2023 CheckJ</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#twitter" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#instagram" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#facebook" />
                        </svg></a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.container-fluid {
    padding: 0;
    min-height: fit-content;
}

.header-img{
    background-image: url('/src/assets/indbg.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    width:100%; height: 300px; overflow: hidden;
}
.menu-btn {
    color:black;
    background-color: rgb(165, 218, 215);
    display: flex;
    justify-content: center;
    text-decoration: none;
}
.menu-btn:hover {
    color:aliceblue;
    background-color: cadetblue;
}
.myborder {
  border:0;
  border-right: 0.1em;
  border-color: lightgrey;
  border-style: solid;
}
</style>
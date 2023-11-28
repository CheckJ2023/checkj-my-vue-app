<template>
 <div v-if="isShowModel_forDelete" class="model-container">
        <div class="model-title">提醒</div>
        <div class="model-content">
            <img class="model-icon"
                src="https://static.vecteezy.com/system/resources/previews/000/440/213/non_2x/question-mark-vector-icon.jpg" />
            <div class="model-message">確定要刪除資料嗎?</div>
        </div>
        <div class="model-content">
            <div class="model-cancel" @click="isShowModel_forDelete = false">取消</div>
            <div class="model-ok" @click="confirmDelete()">確定</div>
        </div>
    </div>
    <div v-if="isShowModel_forEdit" class="model-container">
        <div class="model-title">提醒</div>
        <div class="model-content">
            <img class="model-icon"
                src="https://static.vecteezy.com/system/resources/previews/000/440/213/non_2x/question-mark-vector-icon.jpg" />
            <div class="model-message">確定要更改資料嗎?</div>
        </div>
        <div class="model-content">
            <div class="model-cancel" @click="isShowModel_forEdit = false">取消</div>
            <div class="model-ok" @click="confirmEdit()">確定</div>
        </div>
    </div>
</template>
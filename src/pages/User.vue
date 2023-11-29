<template>
    
    <div class="container">
        <h1>個人專區</h1>
        <UploadPhoto />
    </div>

</template>

<script>
import UploadPhoto from '/src/components/UploadPhoto.vue'

export default {
    components: {
        UploadPhoto
    }
}
</script>

<style scoped>
.container {
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
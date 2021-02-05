<template>
    <div class="container  h-75 mt-4">
            <div class="row align-items-center h-100">
                <div class="col-12">
                    <h5 class="text-center">HELLO</h5>
                    <div  class="text-center"><span class="lead userInfo"></span></div>
                    <h1 class="text-center">Congratulation!</h1>
                    <p class="lead text-center">you had signed in successfully</p>
                    <div class="text-center">
                        <button type="button" class=" btn btn-primary btn-lg">
                            <span class="visually-hidden spinner-grow spinner-grow-md" role="status" aria-hidden="true"></span>
                            <span class="visually-hidden">Loading...</span>
                            <span class="">Logout</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
 .nav-item a{
    color: black;
    cursor: pointer;
}
.nav-item a:hover{
    color: blue;
    text-decoration: underline;
}    
.modal-header{
    border-bottom: none;
}
.modal-footer{
    border-top: none;
}
.modal-content{
    width: 90%;
}
.form-control {
    border-radius: 0;
}
</style>
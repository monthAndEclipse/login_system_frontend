<template>
    <div>
        <div class="container  h-75 ">
            <div class="row justify-content-end">
                <div class="col-3" style="z-index: 99976;">
                <div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <strong class="me-auto">LoginSystem</strong>
                    <small>just now</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                    </div>
                </div>
                </div>
            </div>
            <div class="row align-items-center h-75">
                    <div class="col">
                        <h1 class="text-center">Welcome!</h1>
                        <p class="lead text-center">a simple login system using node.js+express.js+mangodb+passport.js</p>
                        <ul class="nav justify-content-center fs-4">
                            <!--data-bs-backdrop="static" when clicking on the backdrop,the modal will not be closed -->
                            <li class="nav-item  ">
                            <a class="nav-link" aria-current="page" 
                            data-bs-toggle="modal" 
                            data-bs-target="#signIn_modal" 
                            data-bs-backdrop="static">Sign in</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link"  
                            data-bs-toggle="modal" 
                            data-bs-target="#signUp_modal" 
                            data-bs-backdrop="static">
                                Sign up
                            </a>
                            </li>
                        </ul>
                    </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"Header"
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
</style>
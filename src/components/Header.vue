<template>
    <div>
        <div class="container  h-75 ">
            <div class="row justify-content-end">
                <div class="col-3" style="z-index: 99976;">
                <div 
                    class="toast fade" 
                    role="alert" 
                    aria-live="assertive" 
                    aria-atomic="true"
                    ref="toast">
                    <div class="toast-header">
                    <strong class="me-auto">LoginSystem</strong>
                    <small>just now</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body" ref="toast_body">
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
                            <a 
                            class="nav-link" 
                            v-on:click="showSingInModal" 
                            >
                            Sign in</a>
                            </li>
                            <li class="nav-item">
                            <a 
                             class="nav-link" 
                             v-on:click="showSignUpModal" 
                            >
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
    name:"Header",
    methods:{
        showSignUpModal(){
            this.$emit("showSignUpModal")
        },
        showSingInModal(){
            this.$emit("showSignInModal")
        }
    },
    mounted(){
        this.$emit('init',{
            toast:this.$refs.toast,
            toast_body:this.$refs.toast_body
        })
    }
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
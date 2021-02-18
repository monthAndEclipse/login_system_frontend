<template>
        <div ref = "signUp_modal"
          class="modal fade" 
          id="signUp_modal" 
          tabindex="-1" 
          aria-labelledby="signUp_modalLabel" 
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="text-center">
                  <h2>Please sign up</h2>
              </div>
             <div class="modal-body">
               <form  v-on:submit = "signUp">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-8">
                      <div class="input-group mb-3 input-group-lg ">
                        <input 
                          v-model="email"
                          type="email" 
                          class="form-control" 
                          placeholder="Email" 
                          aria-label="username" 
                          required>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-group  input-group-lg">
                        <input 
                          v-model="password"
                          type="password" 
                          class="form-control" 
                          placeholder="Password" 
                          aria-label="password" 
                          required
                          minlength="6"> 

                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-group mb-3 input-group-lg">
                        <input 
                          v-model="confirmedPassword"
                          type="password" 
                          class="form-control" 
                          placeholder="Confirm Password" 
                          aria-label="password"
                          minlength="6"
                          required> 
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center mb-4">
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                  <button 
                  type="submit" 
                  class="w-50 btn btn-primary btn-lg"
                  >
                    <span class="visually-hidden spinner-grow spinner-grow-md" role="status" aria-hidden="true"></span>
                    <span class="visually-hidden">Loading...</span>
                    <span class="">Sign up</span>
                  </button>
                </div>
               </form>
             </div>
             
            </div>
          </div>
        </div>
</template>


<script>
export default {
    name:"SignUp",
    data(){
      return {
        email:"154286411@qq.com",
        password:"",
        confirmedPassword:"",
      } 
    },
    methods:{
      signUp(e){
        e.preventDefault();
        const signUpObj = {
          email:this.email,
          password:this.password,
          confirmedPassword:this.confirmedPassword
        };
        //emit the signup event
        this.$emit('signUp',signUpObj);
      }
    },
    mounted(){
      this.$emit('init',this.$refs.signUp_modal);
    }

}
</script>

<style scoped>
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
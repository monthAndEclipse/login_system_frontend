<template>
    <!--sign up modal start -->
        <div class="modal fade" id="signUp_modal" tabindex="-1" aria-labelledby="signUp_modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="text-center">
                  <h2>Please sign up</h2>
              </div>
             <div class="modal-body">
               <form>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-8">
                      <div class="input-group mb-3 input-group-lg ">
                        <input type="email" class="form-control" placeholder="Email address" aria-label="username" required>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-group  input-group-lg">
                        <input type="password" class="form-control" placeholder="Password" aria-label="password" required> 
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-group mb-3 input-group-lg">
                        <input type="password" class="form-control" placeholder="Confirm Password" aria-label="password" required> 
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center mb-4">
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                  <button type="submit" class="w-50 btn btn-primary btn-lg">
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
        <!--sign up modal end -->
</template>


<script>
export default {
    name:"SignUp"
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
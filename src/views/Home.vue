<template>
  <div>
    <Nav/>
    <Header 
      v-on:showSignUpModal="showModal(this.signUp_modal)"
      v-on:showSignInModal="showModal(this.signIn_modal)"    
      v-on:init="headerInit"
    />
    <SignIn 
      ref="SignIn"
      v-on:signIn="signIn"
      v-on:init="signInInit"/>
    <SignUp 
      ref="SignUp" 
      v-on:signUp="signUp" 
      v-on:init="signUpInit" 
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Nav from '../components/Nav'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import CONFIG from "../common/config.mjs"

export default {
  name: 'Home',
  components: {  
    Header,
    SignIn,
    SignUp,
    Nav
  },
  data(){
    return {
      signUp_modal:'',
      signIn_modal:'',
      toast:'',
      toast_body:''
    }
  },
  methods:{
    signUp(signUpObj){
      console.log(signUpObj);
      axios.post(CONFIG.userRouter+'/signup',signUpObj)
      // axios.post('/signup',signUpObj)
      .then(res=>res.data)
      .then(data=>{
          if(data.code!==-1){
            this.hideModal(this.signUp_modal);
            this.showToast(data.message||data.errors[0].msg||"");
            this.showModal(this.signIn_modal);
          }else{
            this.showToast(data.message||data.errors[0].msg||"");
          }
      })
      .catch(err=>{
        console.log(err);
      });
    },
    signIn(signInObj){
      console.log(signInObj);
      axios.post('/user/signin',signInObj)
      .then(res=>res.data)
      .then(data=>{
        console.log(data)
        if(data.code===-1){
          this.showToast(data.message||data.message.message||"");
        }else{
          document.cookie = "sessionID="+data.sessionID;+";path=/";
          window.location.href = '/index'
        }
      }).catch((err)=>{
        console.log(err.response);
        if(err.response.data.code === -1 ){
          this.showToast(err.response.data.message.message||err.response.data.message||"");
        }else{
          window.location.href = '/index'
        }
      });
    },
    showModal(modal){
      modal.show();
    },
    hideModal(modal){
      modal.hide();
    },
    headerInit(toastObj){
      let {toast,toast_body} = toastObj;
      this.toast = new  bootstrap.Toast(toast, {delay:3000});
      this.toast_body = toast_body;
    },
    showToast(message){
      if(message){
        this.toast_body.innerHTML = message;
      }
      this.toast.show();
    },
    hideToast(){
      this.toast.hide();  
    },
    signUpInit(modal){
      this.signUp_modal = new bootstrap.Modal(modal,{
        keyboard:false,
        backdrop:'static'
      })
    },
    signInInit(modal){
       this.signIn_modal = new bootstrap.Modal(modal,{
        keyboard:false,
        backdrop:'static'
      });
    }
  },
  mounted(){
    axios.get('/user/isSignin')
        .then(res =>res.data)
        .then(data=>{
          if(data.isSignin){
            window.location.href = '/index';
          }
        })
    }
}
</script>

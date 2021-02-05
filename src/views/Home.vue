<template>
  <div>
    <Nav/>
    <Header/>
    <SignIn/>
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Nav from '../components/Nav'

export default {
  name: 'Home',
  components: {  
    Header,
    SignIn,
    SignUp,
    Nav
  }
}
</script>

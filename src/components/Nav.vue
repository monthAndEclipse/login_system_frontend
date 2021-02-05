<template>
        <div id="nav" class="fs-3 ">
            <router-link class = "" to="/">Home</router-link> |
            <router-link class = "" to="/about">About</router-link>
        </div>
</template>

<script>
export default {
    name:'Nav'
}
</script>

<style scoped>
    a:hover{
        color: blue;
        text-decoration: underline;
    }

    a{
        color: black;
        text-decoration: none;
    }

</style>
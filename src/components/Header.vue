<template>
    <header>
        <nav class="container">
            <a href="/"><img src="../assets/logo.png" alt="logo" id="logo" /></a>
            <img v-on:click="openMenu" src="../assets/menu.png" alt="menu" id="menu-buttom"/>
            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <img src="../assets/logo.png" alt="logo" id="menu-logo" />
                    <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/freelancers">Hire</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/order">Order</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/about">About</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            menuActive: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }

}
</script>

<style scoped>
header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
}

#logo{
    height: 100px;
}

#menu-buttom{
    width: 40px;
    height: 40px;
}

#menu-logo {
    width: 100px;
    margin-top: 50px;
    margin-bottom: 15px;
}

#menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-items.active{
    display: flex;
}

ul{
    list-style: none;
    text-align: center;
}

ul li{
    margin: 20px 0px;
    border-top: 3px solid rgb(228, 8, 0);
}

ul li a{
    color: var(--color-text-light);
}

ul li a:hover{
    border-top: 3px solid black;
}

@media (min-width: 700px){
    #menu-buttom,
    #menu-overlay,
    #menu-logo{
        display: none;
    }

    #menu-items{
        display: flex;
        position: static;
        height: 100px;
        width: auto;
    }

    ul{
        display: flex;
        height: 100px;
        align-items: center;
    }

    ul li{
        margin: 0;
        margin-left: 30px;
    }
}

</style>
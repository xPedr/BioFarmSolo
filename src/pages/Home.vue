<template>
    <main>
        <img src="../assets/home-img.png" alt="home-image"/>
        <div id="home-content">
            <h1>BIOFARMSOLO</h1>
            <h3>Sustainable Dreams</h3>
            <p>Our challange is provide you the best experience on sustainable projects! Our platform will help you to find the best projetist ever! Your dreams really care to us, and because of it we provide on our platform the best option to: solar plants, aeolic plants, rotative culture projects, green construction developers, farm management project, etc.. Your green dreams starting in one place!</p>
        </div>
    </main>
</template>

<script>


export default {
    name: "Home",
    
}
</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}

#home-content {
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
    border: 4px solid black;
    padding: 50px;
    background-color: var(--color-background);
}

img {
    width: 500px;
    margin: 0 30px;
    border: 3px solid black;
}

h1, h3, p {
    color: var(--color-text-dark);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0 30px;
    width: 400px;
}

</style>
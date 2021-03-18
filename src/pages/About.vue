<template>
    <main>
        <sector id="setores">
            <img src="../assets/about-1.jpg" alt="about-image"/>
            <div id="about-content">
                <h1>GREEN LIFE</h1>
                <h3>Greatest Plantation</h3>
                <p>Search on our platform to find the agronoumous engineer you want to make your ground fertile and ready to rotative cultures! We have the best professionals on demand.</p>
            </div>
        </sector>
        <sector id="setores">
            <div id="about-content">
                <h1>UNIVERSE POWER</h1>
                <h3>Sustainable Energy Power Plant</h3>
                <p>We also provides you the best technicians and projetist to solar power plants and aeolic generators. We have much more services to your demand! Interior designers, architects, mechanics engineers, constructors and all the help you might have to a green project!</p>
            </div>
            <img src="../assets/about-2.jpg" alt="about-image"/>
        </sector>
        <sector id="setores">
            <img src="../assets/about-3.jpg" alt="about-image"/>
            <div id="about-content">
                <h1>LIFE CRADLE</h1>
                <h3>Ecological Project</h3>
                <p>On our platform you can also receive support to a complete ecological project. We provide veterinarians on the platform too! (don't forget ask credentials) Our inniciative is to you have a bioculture structure if you want to feed your animals who fertilizes your fields. Using sustainable energy you irrigate and have certain autonomy. A complete playground!</p>
            </div>
        </sector>
    </main>
</template>

<script>


export default {
    name: "About",
    
}
</script>

<style scoped>

main{
    height: 80%;
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0px;
    
}

#setores {
    display: flex;
    flex-direction: row;
    margin: 30px 0px;

}

#about-content {
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
    padding: 10px 0px;
}

</style>
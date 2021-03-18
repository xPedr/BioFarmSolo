<template>
    <main>
        <img src="../assets/freelancer.png" alt="hire-image"/>
        <div id="hire-content">
            <h1>BIOFARMSOLO</h1>
            <h3>Find the best freelancers!</h3>
            <p>On our dashboard you can find a self-profile from every freelancer registred on our company. They must provide you informations and if there a match you can hire the freelancer service immediatly! Don't forget to contact the freelancer before to check availiblity.</p>
        </div>
    </main>
</template>

<script>


export default {
    name: "Freelancer",
    
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
}

img {
    width: 500px;
    margin: 0 30px;
}

h1, h3, p {
    color: var(--color-text-dark);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0 30px;
}

</style>
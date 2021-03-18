<template>
    <main>
        <img src="../assets/order.jpg" alt="order-image"/>
        <div id="order-content">
            <h1>BIOFARMSOLO</h1>
            <h3>Sustainable Dreams</h3>
            <p>Our platform offers you a individual experience to research about freelancer profile and demand a project. During this process you will be able to contact your worker and ask about process production. We always recommend you to ask pictures or some material during the completation. You pay our platform to the project start, and after 1 month from payment the freelancer receive the first amount (if the project is conclude before it will be paid total). If project is not concluded you can cancel over 1 month after payment.</p>
        </div>
    </main>
</template>

<script>


export default {
    name: "Order",
    
}
</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}

#order-content {
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
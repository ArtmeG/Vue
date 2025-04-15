<script setup>

</script>

<template>
    <div class="about-me">
        <header>
            <slot name="header">Default about me Header</slot>
        </header>

        <section>
            <slot>Default about me content</slot>
        </section>

        <footer>
            <slot name="footer">Default about me Footer</slot>
        </footer>
    </div>
</template>

<style scoped>
.about-me {
    border: 2px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
}
header, footer {
    background-color: #cdcdcd;
    padding: 0.5rem;
    font-weight: bold;
}
section {
    margin: 1rem 0;
}
</style>
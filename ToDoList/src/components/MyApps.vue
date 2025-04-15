<script setup>
const apps = [
    'Todo List 1',
    'Todo List 2',
    'Todo List 3'
];
</script>

<template>
    <div class="my-apps">
        <h1>My Apps</h1>
        <ul>
            <li v-for="app in apps" :key="app" class="app-item">
                {{ app }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.my-apps {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 12px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
}

.my-apps h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
}

.app-item {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background-color: #ffffff;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
}
</style>
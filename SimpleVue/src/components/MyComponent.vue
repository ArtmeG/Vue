<script setup>
import { ref } from 'vue';

const title = ref('Title');
const isVisible = ref(true);
const inputText = ref('');
const items = ref(['item 1', 'Item 2', 'Item 3']);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};

const addItem = () => {
    items.value.push(`Item ${items.value.length + 1}`);
};

const deleteItem = () => {
    items.value.pop();
}

const clearInput = () => {
    inputText.value = '';
};
</script>

<template>
    <div>
        <h2 v-if="isVisible">{{ inputText.toUpperCase() || title }}</h2>
        <input v-model="inputText" placeholder="Enter text" />
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
        <button @click="toggleVisibility">{{ isVisible ? 'Hide title' : 'Show title' }}</button>
        <button @click="addItem">Add item</button>
        <button @click="deleteItem">Delete item</button>
        <button @click="clearInput">Clean input</button>
    </div>
</template>

<style scoped>

</style>
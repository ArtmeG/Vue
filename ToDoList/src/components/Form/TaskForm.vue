<script setup>

import {computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

const props = defineProps({
    tasks: Array,
    filterTasks: String
});

const emit = defineEmits(['toggle-task', 'delete-task']);

const filteredTasks = computed(() => {
    return props.tasks.filter(task => {
        return props.filterTasks === 'all' ||
            (props.filterTasks === 'done' && task.isDone) ||
            (props.filterTasks === 'active' && !task.isDone)
    });
});

const toggleStatus = (index) => {
    emit("toggle-task", index);
}

const deleteTask = (index) => {
    emit("delete-task", index);
}

onBeforeMount(() => {
    console.log("[Task] onBeforeMount");
});

onMounted(() => {
    console.log("[Task] onMounted");
});

onBeforeUpdate(() => {
    console.log("[Task] onBeforeUpdate");
});

onUpdated(() => {
    console.log("[Task] onUpdated");
});

onBeforeUnmount(() => {
    console.log("[Task] onBeforeUnmount");
});

onUnmounted(() => {
    console.log("[Task] onUnmounted");
});

</script>

<template>
    <ul>
        <template v-for="(item, index) in filteredTasks" :key="index">
            <li :class="{'task-done': item.isDone}">
                <span @click="toggleStatus(index)">{{ item.title }}</span>
                <button @click="deleteTask(index)">X</button>
            </li>
        </template>
    </ul>
</template>

<style lang="scss" scoped>
li {
    cursor: pointer;
    background-color: $bg-color;
    border-radius: $border-radius;
    padding: 0.5rem;
    margin: 0.5rem 0;
    transition: background 0.3s;
}

button {
    margin-left: 0.5rem;
}

.task-done {
    text-decoration: line-through;
    color: $danger-color;
}
</style>
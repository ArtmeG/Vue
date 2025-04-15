<script setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';
import AddForm from "@/components/Form/AddForm.vue";
import FilterForm from "@/components/Form/FilterForm.vue";
import TitleForm from "@/components/Form/TitleForm.vue";
import TaskForm from "@/components/Form/TaskForm.vue";

const filter = ref('all');
const tasks = ref([
    { title: 'Task 1', isDone: false },
    { title: 'Task 2', isDone: false },
    { title: 'Task 3', isDone: false },
    { title: 'Task 4', isDone: false },
    { title: 'Task 5', isDone: true }
]);

const updateFormData = (data) => {
    console.log(data);
    console.log('data');
    console.log(tasks);
    tasks.value.push(data);
};

const handleToggleStatus = (index) => {
    tasks.value[index].isDone = !tasks.value[index].isDone;
};

const handleDeleteTask = (index) => {
    tasks.value.splice(index, 1);
};

onBeforeMount(() => {
    console.log("[ToDoList] onBeforeMount");
});

onMounted(() => {
    console.log("[ToDoList] onMounted");
});

onBeforeUpdate(() => {
    console.log("[ToDoList] onBeforeUpdate");
});

onUpdated(() => {
    console.log("[ToDoList] onUpdated");
});

onBeforeUnmount(() => {
    console.log("[ToDoList] onBeforeUnmount");
});

onUnmounted(() => {
    console.log("[ToDoList] onUnmounted");
});

</script>

<template>
    <div>
        <TitleForm/>
        <FilterForm @filter="(data) => { filter = data; }"/>
        <AddForm placeholder="Enter text" @update="updateFormData" />
        <TaskForm
            v-if="tasks.length > 0"
            :tasks="tasks"
            :filterTasks="filter"
            @toggle-task="handleToggleStatus"
            @delete-task="handleDeleteTask"
        />
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 1rem;
    font-family: 'Segoe UI', sans-serif;
    color: $text-color;
}

button {
    margin-left: 1rem;
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 0.25rem 0.75rem;
    border-radius: $border-radius;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
</style>
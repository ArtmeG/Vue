<script setup>
import {ref} from "vue";

const filter = ref('all');
const emit =  defineEmits(['filter']);
const updateFilter = (newFilter) => {
    filter.value = newFilter.target.value;
    emit('filter', filter.value);
}
</script>

<template>
    <div>
        <select @change="updateFilter">
            <option value="all">
                All
            </option>
            <option value="done">
                Done
            </option>
            <option value="active">
                Active
            </option>

        </select>
    </div>
</template>

<style scoped>

</style>
<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button>Log in</button>
    </form>
</template>

<script setup>
import { ref } from "vue";

    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
        
    }
</script>

<style>

</style>
<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="name">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button>Sign up</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import useSignup from '@/composables/useSignup.js';

    const {error,signup} = useSignup()

    const name = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
        await signup(email.value,password.value)
    }
</script>

<style>

</style>
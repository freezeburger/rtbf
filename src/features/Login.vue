<template>
  <base-card title="Login" class="w-100">
    
    <code>{{credentials}}</code>
    <base-input v-model="credentials.email">
        <template #message>
            Your Email
        </template>
    </base-input>

    <base-input v-model="credentials.password">
        <template #message>
            Your Password
        </template>
    </base-input>

    <base-button 
        icon="🔑" 
        variant="primary" 
        size="large">Connect !</base-button>

  </base-card>
</template>

<script>
export default {
    data(){
        return {
            credentials:{
                email:'',
                password:''
            }
        }
    }
}
</script>

<style>

</style>
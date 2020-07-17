<template>
  <base-card title="Login" class="w-100">
    <code>{{credentials}}</code>

    <base-input v-model="credentials.email" :validator="validators.email">
      <template #message>Your Email</template>
      <template #invalided-message>
        Use an
        <strong>@rtbf.be</strong> email.
      </template>
    </base-input>

    <base-input v-model="credentials.password">
      <template #message>Your Password</template>
    </base-input>

    <div @click="requestIdentification()">
      <base-button icon="🔑" variant="primary" size="large">Connect !</base-button>
    </div>
    
  </base-card>
</template>

<script>
export default {
  methods: {
    requestIdentification() {
      // KZK ?
      alert(123);
    }
  },
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      validators: {
        email(value) {
          return value.includes("@rtbf.be");
        }
      }
    };
  }
};
</script>

<style>
</style>
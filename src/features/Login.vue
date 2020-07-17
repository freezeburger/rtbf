<template>
  <base-card title="Login" class="w-100">
    <code>{{$store.state.welcomeMessage}}</code>
    
    <base-speech 
      :message="$store.state.welcomeMessage">
    </base-speech>

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
import {ActionTypes} from '../store/action-types';

export default {
  methods: {
    requestIdentification() {
      // KZK ?
      /* console.log(
        this.$store
      ); */
      this.$store.dispatch(ActionTypes.CONNECTION, this.credentials)
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
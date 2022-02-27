<template>
  <div class="w-full px-20 py-14 shadow">
    <h1 class="font-extrabold uppercase mb-1 font-sans">welcome to school in svelte</h1>
    <p class="font-thin font-sans text-sm">please register you to enjoy your app.</p>
  </div>
  <main class="w-full flex flex-col items-start px-4 pt-14 pb-7 shadow mb-0">
    <Field type="text" label="first name" v-model="user.firstname"/>
    <Field type="text" label="last name" v-model="user.lastname"/>
    <Field type="password" label="password" v-model="user.password"/>
    <div class="w-full flex flex-col mt-6">
      <button @click="goToNextPage" class="text-white cursor-pointer rounded-md bg-indigo-400 p-2 w-44 place-self-start">connectez-vous</button>
      <span class="place-self-end text-sm mt-10 text-indigo-500" v-if="!isDone">assurez-vous de ne laisser aucun champ vide.</span>
    </div>
  </main>
  <div class="w-full px-4 font-sans text-sm text-zinc-600 py-20">
      @copyright 27 feb 2022
  </div>
</template>


<script lang="ts">
  import Field from "../components/Field.vue";
  import {defineComponent, reactive, ref} from "vue";
  import {useRoute, useRouter} from "vue-router";

  export default defineComponent({
      name: "Login",
      components: {Field},
      setup(){
          const router = useRouter();
          const route = useRoute();
          const user = reactive({
            firstname: "",
            lastname: "",
            password: ""
          });
          const isDone = ref(true);
          const goToNextPage = ()=>{
            console.log(user.firstname);
            console.log(user.lastname);
            console.log(user.password);
            if(user.firstname.trim() !== "" && user.lastname.trim() !== "" && user.password.trim() !== ""){
              isDone.value = true;
              router.push({path: "/dashboard"});
            }
            else{
              isDone.value = false;
            }
          }
          return {
            user,
            isDone,
            goToNextPage
          }
      }
  });
</script>

<template>
  <div class="w-full flex bg-white px-4 py-2 items-center mb-4">
    <label class="w-1/4 mr-4">{{label}}</label>
    <input :type="type" @input="$emit('update:modelValue', $event.target.value)"
     class="border-gray-200 border-b w-full outline-none focus:outline-none font-thin text-yellow-900 placeholder:text-gray-500" :placeholder="`enter your ${label}`"/>
  </div>
</template>


<script setup>
  defineEmits(['update:modelValue']);
  defineProps({
    label:{
      type: String,
      required: true
    },
    type:{
      type: String,
      required: true
    }
  });
</script>

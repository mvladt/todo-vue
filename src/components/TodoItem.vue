<script setup>
import { inject, onMounted, ref } from "vue";
import TodoOptions from "../components/TodoOptions.vue";
import useOnWindowClick from "../composition/useOnWindowClick.js";
import api from "../api/index.js";

const props = defineProps(["todo"]);
const todos = inject("todos");

const isHover = ref(false);
const isActive = ref(false);

async function onDelete() {
  await api.todo.remove(props.todo._id);
  todos.value = todos.value.filter((todo) => todo._id !== props.todo._id);
}

async function onUpdate() {
  await api.todo.update({
    _id: props.todo._id,
    checked: !props.todo.checked,
  });
}

async function onSetTimer() {
  isActive.value = isHover.value = false;

  if (["denied", "default"].includes(Notification.permission)) {
    if ((await Notification.requestPermission()) !== "granted") return;
  }
  const pushSubscription = await api.push.subscribeUserToPush();
  console.log(JSON.stringify(pushSubscription));
  api.push.postSubscription(pushSubscription);

  api.push.makePushMessage(props.todo.text);
}

onMounted(() => {
  useOnWindowClick(() => {
    if (!isHover.value) {
      isActive.value = false;
    }
  });
});
</script>

<template>
  <li
    class="item"
    :class="{ checked: todo.checked, hover: isHover || isActive }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <input type="checkbox" v-model="todo.checked" @click="onUpdate" />
    &nbsp;
    <span>{{ todo.text }}</span>
    &nbsp;

    <TodoOptions
      :display="isHover || isActive"
      :is-active="isActive"
      @active="isActive = !isActive"
      @delete="onDelete"
      @timer="onSetTimer"
    />
  </li>
</template>

<style scoped>
.item {
  width: 100%;
  position: relative;
  padding: 0.5rem;
  color: var(--base);
  text-align: center;
  border: 1px solid var(--base-light);
  border-radius: 8px;
  background-color: var(--base-light);
}

.item.hover {
  border: 1px solid var(--base);
}

.item.checked {
  text-decoration: line-through;
  color: darkgray;
}
</style>

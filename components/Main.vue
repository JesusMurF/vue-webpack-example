<template>
  <div>
    <h1>Hello from Vue and Webpack</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugiat
      suscipit illum dolor quasi similique totam quibusdam est, magni quae iure
      debitis amet, nisi accusamus molestias repudiandae ipsum asperiores eum!
    </p>
    <h2>Usuarios</h2>
    <ul v-if="!isLoading">
      <li v-for="user in users" v-bind:key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  created() {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => {
        this.isLoading = false;
        this.users = json.users;
      });
  },
};
</script>

<style>
@font-face {
  font-family: "Anonymous Pro";
  src: url("../fonts/Poppins-regular.ttf");
}

body {
  margin: 0;
  box-sizing: border-box;
  font-family: "Anonymous Pro", monospace;
}
h1 {
  color: slateblue;
}
p {
  font-weight: normal;
}
</style>

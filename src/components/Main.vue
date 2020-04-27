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
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
    <form method="post" @submit.prevent @submit="checkForm">
      <input type="text" id="name" name="name" v-model="name" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      name: "",
      users: [],
      isLoading: true,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      fetch("/api/users")
        .then((response) => response.json())
        .then((json) => {
          this.isLoading = false;
          this.users = json.users;
        });
    },
    checkForm(event) {
      fetch("/api/users", {
        method: "POST",
        body: { name: this.name },
      }).then(() => {
        this.isLoading = true;
        this.getUsers();
      });
      this.name = "";
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: url("../../assets/fonts/Poppins-Regular.ttf");
}

body {
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", monospace;
}
h1 {
  color: slateblue;
}
p {
  font-weight: normal;
}
</style>

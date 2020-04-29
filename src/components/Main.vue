<template>
  <div>
    <h2>Usuarios</h2>
    <ul v-if="!isLoadingUsers">
      <li v-for="user in users" v-bind:key="user.id" @click="getUser(user.id)">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
    <form method="post" @submit.prevent @submit="checkForm">
      <input
        type="text"
        id="name"
        autocomplete="off"
        name="name"
        v-model="name"
      />
      <input type="submit" />
    </form>
    <div v-if="showDetail">{{ user.id }} - {{ user.name }}</div>

    <h2>Trabajo</h2>
    <ul v-if="!isLoadingJobs">
      <li v-for="job in jobs" v-bind:key="job.id">
        {{ job.title }}
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
      name: "",
      users: [],
      user: {},
      jobs: [],
      isLoadingUsers: true,
      isLoadingJobs: true,
      showDetail: false,
    };
  },
  created() {
    this.getUsers();
    this.getJobs();
  },
  methods: {
    getUser(id) {
      this.showDetail = true;
      fetch(`/api/users/${id}`)
        .then((response) => response.json())
        .then((user) => {
          this.user = user;
        });
    },
    getUsers() {
      fetch("/api/users")
        .then((response) => response.json())
        .then((json) => {
          this.isLoadingUsers = false;
          this.users = json.users;
        });
    },
    checkForm(event) {
      fetch("/api/users", {
        method: "POST",
        body: { name: this.name },
      }).then(() => {
        this.isLoadingUsers = true;
        this.getUsers();
      });
      this.name = "";
    },
    getJobs() {
      fetch("/api/jobs")
        .then((response) => response.json())
        .then((json) => {
          this.isLoadingJobs = false;
          this.jobs = json.jobs;
        });
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
li {
  cursor: pointer;
}
</style>

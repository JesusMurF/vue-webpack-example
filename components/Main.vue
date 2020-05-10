<template>
  <div>
    <h1>Vue y Webpack personalizado</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugiat
      suscipit illum dolor quasi similique totam quibusdam est, magni quae iure
      debitis amet, nisi accusamus molestias repudiandae ipsum asperiores eum!
    </p>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: url("../fonts/Poppins-regular.ttf");
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

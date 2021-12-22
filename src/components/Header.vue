<template>
  <div class="header-container">
    <img src="../assets/doctor.png" class="img" />
    <div class="text-container">
      <h1>Do you have a healthy life with us?</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -10px;
  margin: 0px 20px;
}
.img {
  width: 130px;
  height: 130px;
}
.text-container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: white;
  border-radius: 20px;
  background-color: #5989ba;
}
</style>

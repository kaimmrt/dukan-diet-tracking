<template>
  <br />
  <br />
  <Header />

  <div class="form-container">
    <div>
      <br />
      <br />
      <div class="input-container bg-color-pink text-color-white">
        <p class="input-text">Please select your gender</p>
        <section class="gender-img-container">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            class="input-hidden"
            v-model="gender"
          />
          <label for="male">
            <img src="../assets/male.png" class="gender-img" />
          </label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            class="input-hidden"
            v-model="gender"
          />
          <label for="female">
            <img src="../assets/female.png" class="gender-img" />
          </label>
        </section>
      </div>

      <br />
      <br />
      <div class="input-container bg-color-pink text-color-white">
        <div class="input-container">
          <p class="input-text">Please enter your age</p>
          <input type="number" min="0" class="input" v-model="age" />
        </div>

        <div class="input-container">
          <p class="input-text">Please enter your height</p>
          <input class="input" type="number" min="0" v-model="height" />
        </div>

        <div class="input-container">
          <p class="input-text">Please enter your weight</p>
          <input class="input" type="number" min="0" v-model="weight" />
        </div>
      </div>
    </div>

    <div>
      <br />
      <br />
      <div class="input-container bg-color-pink text-color-white">
        <div class="input-container">
          <p class="input-text">Do you have cholesterol ?</p>
          <section class="gender-img-container">
            <input
              type="radio"
              name="cholesterol"
              id="yes-cholesterol"
              value="yes"
              v-model="cholesterol"
              class="input-hidden"
            />
            <label for="yes-cholesterol">
              <img src="../assets/check.png" class="check-img" />
            </label>

            <input
              type="radio"
              name="cholesterol"
              id="no-cholesterol"
              value="no"
              v-model="cholesterol"
              class="input-hidden"
            />
            <label for="no-cholesterol">
              <img src="../assets/close.png" class="check-img" />
            </label>
          </section>
        </div>

        <div class="input-container">
          <p class="input-text">Do you have diabetes ?</p>
          <section class="gender-img-container">
            <input
              type="radio"
              name="diabetes"
              id="yes-diabetes"
              value="yes"
              class="input-hidden"
              v-model="diabetes"
            />
            <label for="yes-diabetes">
              <img src="../assets/check.png" class="check-img" />
            </label>

            <input
              type="radio"
              name="diabetes"
              id="no-diabetes"
              value="no"
              class="input-hidden"
              v-model="diabetes"
            />
            <label for="no-diabetes">
              <img src="../assets/close.png" class="check-img" />
            </label>
          </section>
        </div>

        <div class="input-container">
          <p class="input-text">Do you have tension ?</p>
          <section class="gender-img-container">
            <input
              type="radio"
              name="tension"
              id="yes-tension"
              value="yes"
              class="input-hidden"
              v-model="tension"
            />
            <label for="yes-tension">
              <img src="../assets/check.png" class="check-img" />
            </label>

            <input
              type="radio"
              name="tension"
              id="no-tension"
              value="no"
              class="input-hidden"
              v-model="tension"
            />
            <label for="no-tension">
              <img src="../assets/close.png" class="check-img" />
            </label>
          </section>
        </div>
      </div>
      <button class="form-button" @click="sendDiet()">SEND</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      gender: "",
      age: "",
      height: "",
      weight: "",
      cholesterol: "",
      diabetes: "",
      tension: "",
    };
  },
  validations() {
    return {
      gender: { required },
      age: { required },
      height: { required },
      weight: { required },
      cholesterol: { required },
      diabetes: { required },
      tension: { required },
    };
  },
  components: {
    Header,
  },
  methods: {
    sendDiet() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const a = {
          gender: this.gender,
          age: this.age,
          weight: this.weight,
          height: this.height,
          cholesterol: this.cholesterol,
          diabetes: this.diabetes,
          tension: this.tension,
        };

        this.$store.commit("setPersonInfo", a);
        this.$router.push("/diet");
      } else {
        window.alert("Please fill in all fields!");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  display: flex;
  justify-content: space-around;
  height: 60vh;
}

input[type="radio"]:checked + label > img {
  border: 1px solid #a2c5e9;
  box-shadow: 0 0 3px 3px #5989ba;
}

input[type="radio"]:checked + label > img {
  transform: rotateZ(-10deg) rotateX(10deg);
}

.input-hidden {
  position: absolute;
  left: -9999px;
}

.input-container {
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding-bottom: 15px;
}

.bg-color-pink {
  background-color: #f2989f;
}

.text-color-white {
  color: white;
}

.input-container-d-flex {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

.input {
  width: 200px;
  height: 25px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
}

.input-select {
  width: 205px;
  height: 37px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
}

.input-text {
  text-align: start;
  font-size: 18px;
  font-weight: 560;
}

.gender-img {
  width: 80px;
  height: 80px;
  padding: 10px;
}

.check-img {
  width: 40px;
  height: 40px;
  padding: 10px;
}

.gender-img-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.form-button {
  width: 450px;
  height: 50px;
  border-radius: 20px;
  border: solid;
  border-width: 1px;
  cursor: pointer;
  background-color: #5989ba;
  color: white;
  margin-top: 40px;
}

.form-button:hover {
  background-color: #7fa6cc;
}
</style>

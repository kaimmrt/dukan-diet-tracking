<template>
  <div class="app">
    {{ HealthSituation() }}
    <div class="diet-container" v-for="(value, index) in getData" :key="index">
      <div class="diet" v-for="(meal, mindex) in value.meal" :key="mindex">
        <p
          @click="console({ meal, mindex })"
          v-if="mindex == 0"
          class="diet-time"
        >
          {{ value.time }}
        </p>
        <p v-else class="text">{{ meal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../data/data";

export default {
  created() {
    this.HealthSituation();
  },
  computed: {
    ...mapGetters({
      getPersonInfo: "_getPersonInfo",
      getData: "_getData",
    }),
  },

  methods: {
    console(props) {
      console.log(props);
    },

    HealthSituation() {
      if (this.getPersonInfo.gender == "male") {
        if (
          this.getPersonInfo.cholesterol == "yes" ||
          this.getPersonInfo.tension == "yes" ||
          this.getPersonInfo.diabetes == "yes"
        ) {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 150) {
                this.$store.commit("setData", data[1]);
              } else {
                this.$store.commit("setData", data[0]);
              }
            } else {
              if (this.getPersonInfo.height < 150) {
                this.$store.commit("setData", data[1]);
              } else {
                this.$store.commit("setData", data[0]);
              }
            }
          } else if (
            this.getPersonInfo.age >= 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            }
          } else if (
            this.getPersonInfo.age >= 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[5]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          } else if (
            this.getPersonInfo.age >= 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[5]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[5]);
              }
            }
          } else {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[5]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          }
        } else {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 150) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            } else {
              if (this.getPersonInfo.height < 150) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[5]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[5]);
              }
            }
          } else {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[6]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          }
        }
      } else {
        if (
          this.getPersonInfo.cholesterol == "yes" ||
          this.getPersonInfo.tension == "yes" ||
          this.getPersonInfo.diabetes == "yes"
        ) {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 145) {
                this.$store.commit("setData", data[1]);
              } else {
                this.$store.commit("setData", data[0]);
              }
            } else {
              if (this.getPersonInfo.height < 145) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[5]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            }
          } else {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          }
        } else {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 145) {
                this.$store.commit("setData", data[0]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            } else {
              if (this.getPersonInfo.height < 145) {
                this.$store.commit("setData", data[1]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[4]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[4]);
              } else {
                this.$store.commit("setData", data[3]);
              }
            }
          } else {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[3]);
              } else {
                this.$store.commit("setData", data[2]);
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                this.$store.commit("setData", data[2]);
              } else {
                this.$store.commit("setData", data[1]);
              }
            }
          }
        }
      }
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.diet-container {
  width: 450px;
  height: 330px;
  background-color: #f2989f;
  margin-right: 30px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
.diet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.diet-time {
  font-size: 20px;
  font-weight: bold;
  color: #5989ba;
}
.text {
  color: white;
}
</style>

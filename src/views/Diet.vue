<template>
  <div class="app">{{ HealthSituation() }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.HealthSituation();
  },
  computed: {
    ...mapGetters({
      getPersonInfo: "_getPersonInfo",
    }),
  },
  methods: {
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
                return "15 den küçük kilosu 60 dan az boyu 150 den az sağlıksız erkek";
              } else {
                return "15 den küçük kilosu 60 dan az boyu 150 den fazla sağlıksız erkek";
              }
            } else {
              if (this.getPersonInfo.height < 150) {
                return "15 den küçük kilosu 60 dan fazla boyu 150 den az sağlıksız erkek";
              } else {
                return "15 den küçük kilosu 60 dan fazla boyu 150 den fazla sağlıksız erkek";
              }
            }
          } else if (
            this.getPersonInfo.age >= 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "15 den büyük 21 den küçük kilosu 60 dan az boyu 165 den az sağlıksız erkek";
              } else {
                return "15 den büyük 21 den küçük kilosu 60 dan az boyu 165 den fazla sağlıksız erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "15 den büyük 21 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıksız erkek";
              } else {
                return "15 den büyük 21 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıksız erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("15 den büyük 21 den küçük kilosu  80 den fazla boyu 165 den az sağlıksız erkek");
              } else {
                ("15 den büyük 21 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıksız erkek");
              }
            }
          } else if (
            this.getPersonInfo.age >= 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "21 den büyük 35 den küçük kilosu 60 dan az boyu 165 den az sağlıksız erkek";
              } else {
                return "21 den büyük 35 den küçük kilosu 60 dan az boyu 165 den fazla sağlıksız erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "21 den büyük 35 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıksız erkek";
              } else {
                return "21 den büyük 35 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıksız erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("21 den büyük 35 den küçük kilosu  80 den fazla boyu 165 den az sağlıksız erkek");
              } else {
                ("21 den büyük 35 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıksız erkek");
              }
            }
          } else if (
            this.getPersonInfo.age >= 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 165 den az sağlıksız erkek";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 165 den fazla sağlıksız erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "35 den büyük 50 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıksız erkek";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıksız erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("35 den büyük 50 den küçük kilosu  80 den fazla boyu 165 den az sağlıksız erkek");
              } else {
                ("35 den büyük 50 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıksız erkek");
              }
            }
          } else {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "50 den büyük kilosu 60 dan az boyu 165 den az sağlıksız erkek";
              } else {
                return "50 den büyük kilosu 60 dan az boyu 165 den fazla sağlıksız erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "50 den büyük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıksız erkek";
              } else {
                return "50 den büyük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıksız erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("50 den büyük kilosu  80 den fazla boyu 165 den az sağlıksız erkek");
              } else {
                ("50 den büyük kilosu  80 den fazla boyu 165 den fazla sağlıksız erkek");
              }
            }
          }
        } else {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 150) {
                return "15 den küçük kilosu 60 dan az boyu 150 den az sağlıklı erkek";
              } else {
                return "15 den küçük kilosu 60 dan az boyu 150 den fazla sağlıklı erkek";
              }
            } else {
              if (this.getPersonInfo.height < 150) {
                return "15 den küçük kilosu 60 dan fazla boyu 150 den az sağlıklı erkek";
              } else {
                return "15 den küçük kilosu 60 dan fazla boyu 150 den fazla sağlıklı erkek";
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "15 den büyük 21 den küçük kilosu 60 dan az boyu 165 den az sağlıklı erkek";
              } else {
                return "15 den büyük 21 den küçük kilosu 60 dan az boyu 165 den fazla sağlıklı erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "15 den büyük 21 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıklı erkek";
              } else {
                return "15 den büyük 21 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıklı erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("15 den büyük 21 den küçük kilosu  80 den fazla boyu 165 den az sağlıklı erkek");
              } else {
                ("15 den büyük 21 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıklı erkek");
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "21 den büyük 35 den küçük kilosu 60 dan az boyu 165 den az sağlıklı erkek";
              } else {
                return "21 den büyük 35 den küçük kilosu 60 dan az boyu 165 den fazla sağlıklı erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "21 den büyük 35 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıklı erkek";
              } else {
                return "21 den büyük 35 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıklı erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("21 den büyük 35 den küçük kilosu  80 den fazla boyu 165 den az sağlıklı erkek");
              } else {
                ("21 den büyük 35 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıklı erkek");
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 165 den az sağlıklı erkek";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 165 den fazla sağlıklı erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "35 den büyük 50 den küçük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıklı erkek";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıklı erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("35 den büyük 50 den küçük kilosu  80 den fazla boyu 165 den az sağlıklı erkek");
              } else {
                ("35 den büyük 50 den küçük kilosu  80 den fazla boyu 165 den fazla sağlıklı erkek");
              }
            }
          } else {
            if (this.getPersonInfo.weight < 60) {
              if (this.getPersonInfo.height < 165) {
                return "50 den büyük kilosu 60 dan az boyu 165 den az sağlıklı erkek";
              } else {
                return "50 den büyük kilosu 60 dan az boyu 165 den fazla sağlıklı erkek";
              }
            } else if (
              this.getPersonInfo.weight > 60 &&
              this.getPersonInfo.weight < 80
            ) {
              if (this.getPersonInfo.height < 165) {
                return "50 den büyük kilosu 60 dan fazla 80 den az boyu 165 den az sağlıklı erkek";
              } else {
                return "50 den büyük kilosu 60 dan fazla 80 den az boyu 165 den fazla sağlıklı erkek";
              }
            } else {
              if (this.getPersonInfo.height < 165) {
                ("50 den büyük kilosu  80 den fazla boyu 165 den az sağlıklı erkek");
              } else {
                ("50 den büyük kilosu  80 den fazla boyu 165 den fazla sağlıklı erkek");
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
                return "15 den küçük kilosu 50 dan az boyu 145 den az sağlıksız kadın";
              } else {
                return "15 den küçük kilosu 50 dan az boyu 145 den fazla sağlıksız kadın";
              }
            } else {
              if (this.getPersonInfo.height < 145) {
                return "15 den küçük kilosu 50 dan fazla boyu 145 den az sağlıksız kadın";
              } else {
                return "15 den küçük kilosu 50 dan fazla boyu 145 den fazla sağlıksız kadın";
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "15 den büyük 21 den küçük kilosu 50 dan az boyu 155 den az sağlıksız kadın";
              } else {
                return "15 den büyük 21 den küçük kilosu 50 dan az boyu 155 den fazla sağlıksız kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "15 den büyük 21 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıksız kadın";
              } else {
                return "15 den büyük 21 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıksız kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("15 den büyük 21 den küçük kilosu  70 den fazla boyu 155 den az sağlıksız kadın");
              } else {
                ("15 den büyük 21 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıksız kadın");
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "21 den büyük 35 den küçük kilosu 50 dan az boyu 155 den az sağlıksız kadın";
              } else {
                return "21 den büyük 35 den küçük kilosu 50 dan az boyu 155 den fazla sağlıksız kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "21 den büyük 35 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıksız kadın";
              } else {
                return "21 den büyük 35 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıksız kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("21 den büyük 35 den küçük kilosu  70 den fazla boyu 155 den az sağlıksız kadın");
              } else {
                ("21 den büyük 35 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıksız kadın");
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "35 den büyük 50 den küçük kilosu 50 dan az boyu 155 den az sağlıksız kadın";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 155 den fazla sağlıksız kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "35 den büyük 50 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıksız kadın";
              } else {
                return "35 den büyük 50 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıksız kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("35 den büyük 50 den küçük kilosu  70 den fazla boyu 155 den az sağlıksız kadın");
              } else {
                ("35 den büyük 50 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıksız kadın");
              }
            }
          } else {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "50 den büyük kilosu 50 dan az boyu 155 den az sağlıksız kadın";
              } else {
                return "50 den büyük kilosu 50 dan az boyu 155 den fazla sağlıksız kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "50 den büyük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıksız kadın";
              } else {
                return "50 den büyük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıksız kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("50 den büyük kilosu  70 den fazla boyu 155 den az sağlıksız kadın");
              } else {
                ("50 den büyük kilosu  70 den fazla boyu 155 den fazla sağlıksız kadın");
              }
            }
          }
        } else {
          if (this.getPersonInfo.age < 15) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 145) {
                return "15 den küçük kilosu 50 dan az boyu 145 den az sağlıklı kadın";
              } else {
                return "15 den küçük kilosu 50 dan az boyu 145 den fazla sağlıklı kadın";
              }
            } else {
              if (this.getPersonInfo.height < 145) {
                return "15 den küçük kilosu 50 dan fazla boyu 145 den az sağlıklı kadın";
              } else {
                return "15 den küçük kilosu 50 dan fazla boyu 145 den fazla sağlıklı kadın";
              }
            }
          } else if (
            this.getPersonInfo.age > 15 &&
            this.getPersonInfo.age < 21
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "15 den büyük 21 den küçük kilosu 50 dan az boyu 155 den az sağlıklı kadın";
              } else {
                return "15 den büyük 21 den küçük kilosu 50 dan az boyu 155 den fazla sağlıklı kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "15 den büyük 21 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıklı kadın";
              } else {
                return "15 den büyük 21 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıklı kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("15 den büyük 21 den küçük kilosu  70 den fazla boyu 155 den az sağlıklı kadın");
              } else {
                ("15 den büyük 21 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıklı kadın");
              }
            }
          } else if (
            this.getPersonInfo.age > 21 &&
            this.getPersonInfo.age < 35
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "21 den büyük 35 den küçük kilosu 50 dan az boyu 155 den az sağlıklı kadın";
              } else {
                return "21 den büyük 35 den küçük kilosu 50 dan az boyu 155 den fazla sağlıklı kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "21 den büyük 35 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıklı kadın";
              } else {
                return "21 den büyük 35 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıklı kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("21 den büyük 35 den küçük kilosu  70 den fazla boyu 155 den az sağlıklı kadın");
              } else {
                ("21 den büyük 35 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıklı kadın");
              }
            }
          } else if (
            this.getPersonInfo.age > 35 &&
            this.getPersonInfo.age < 50
          ) {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "35 den büyük 50 den küçük kilosu 50 dan az boyu 155 den az sağlıklı kadın";
              } else {
                return "35 den büyük 50 den küçük kilosu 60 dan az boyu 155 den fazla sağlıklı kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "35 den büyük 50 den küçük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıklı kadın";
              } else {
                return "35 den büyük 50 den küçük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıklı kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("35 den büyük 50 den küçük kilosu  70 den fazla boyu 155 den az sağlıklı kadın");
              } else {
                ("35 den büyük 50 den küçük kilosu  70 den fazla boyu 155 den fazla sağlıklı kadın");
              }
            }
          } else {
            if (this.getPersonInfo.weight < 50) {
              if (this.getPersonInfo.height < 155) {
                return "50 den büyük kilosu 50 dan az boyu 155 den az sağlıklı kadın";
              } else {
                return "50 den büyük kilosu 50 dan az boyu 155 den fazla sağlıklı kadın";
              }
            } else if (
              this.getPersonInfo.weight > 50 &&
              this.getPersonInfo.weight < 70
            ) {
              if (this.getPersonInfo.height < 155) {
                return "50 den büyük kilosu 50 dan fazla 70 den az boyu 155 den az sağlıklı kadın";
              } else {
                return "50 den büyük kilosu 50 dan fazla 70 den az boyu 155 den fazla sağlıklı kadın";
              }
            } else {
              if (this.getPersonInfo.height < 155) {
                ("50 den büyük kilosu  70 den fazla boyu 155 den az sağlıklı kadın");
              } else {
                ("50 den büyük kilosu  70 den fazla boyu 155 den fazla sağlıklı kadın");
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
  padding: 50px;
}
</style>

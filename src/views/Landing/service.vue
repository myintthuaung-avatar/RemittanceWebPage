<template>
  <div>
    <v-col cols="12" sm="12" class="mt-6">
      <v-row align="center" class="mt-1" justify="center">
        <v-card flat height="600" width="150vh">
          <video autoplay muted loop class="d-block w-100 h-200">
            <source src="/src/assets/Landing/sev3.webm" type="video/mp4">
          </video>
        </v-card>
      </v-row>
      <v-row align="center" class="mt-6" justify="center">
        <v-col cols="12" sm="5">
          <!-- Animated v-card -->
          <v-card class="pa-4 animate__animated animate__fadeInDown animate__duration-2s" v-if="showCard">
            <v-img src="@/assets/Landing/sev.webp" height="300px" width="100%"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <transition name="fade">
            <v-card class="pa-4 animate__animated animate__fadeInDown animate__delay-1s" v-if="showCard">
              <v-card-title>
                International Money Transfer
              </v-card-title>
              <v-card-text class="text-wap mt-3" style="font-size: medium;">
                M-Money Transfer provides an international financial service,
                allowing users to pay, receive, and transfer money via the M-Money
                website. It ensures efficient transactions, often delivering funds
                within hours, supported by encryption technology and fraud prevention
                mechanisms.
              </v-card-text>
            </v-card>
          </transition>
        </v-col>
      </v-row>
      <v-row class="mt-1" justify="center" align="center">
        <v-col cols="12" sm="4">
          <v-card class="pa-4 animate__animated animate__fadeInUp animate__delay-2s">
            <v-card-title>
              Money Exchange
            </v-card-title>
            <v-card-text class="text-wap mt-3" style="font-size: medium;">
              <p>
                M-Money offers user-friendly mobile platforms for currency exchange with real-time,
                competitive rates. Transactions are secured with encryption, ensuring financial safety.
                It supports multiple currencies, making it ideal for travelers and businesses.
                M-Money typically charges lower fees than banks, providing a cost-effective solution
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5">
          <!-- Animated v-card -->
          <v-card elevation="3" class="mt-1 animate__animated animate__fadeInUp animate__delay-2s" v-if="showCard">
            <v-img src="@/assets/Landing/exchange.jpg" height="300px" width="100%"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

  </div>
</template>
<script>
import 'animate.css';
export default {
  data() {
    return {
      showCard: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCard = true;
    }, 500); // Delay to show animation
  },
};
</script>
<style scoped>
/* Fade transition for the v-card */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.animate__animated.animate__fadeInDown {
  --animate-duration: 1s;
  /* You can adjust this to your desired speed  
} */

/* @keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInDown {
  animation: fadeInDown 1s ease-in-out;
  /* Adjust the duration as needed 
} */

/* .fadeInUp {
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>
<template>
  <div>
    <v-row dense>
      <v-col cols="12" md="12" class="" height="30%">
        <v-card>
          <v-col cols="12" md="12" class="mt-6">
            <video autoplay muted loop class="d-block w-100">
              <source src="\mmoneymp4.mp4" type="video/mp4">
            </video>
          </v-col>
          <!-- <v-carousel hide-delimiters  style="height: 650px;">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i" class="carousel-image" 
                :src="item.src" height="100%" width="100%"
                cover
              ></v-carousel-item>
            </v-carousel> -->
        </v-card>
      </v-col>
    </v-row>
    <marquee color="blue" class="mt-2">
      <h2 style="color: darkblue; font-family: 'Times New Roman', serif;">Let's Transfer Money from Thailand to Myanmar.
        Trustworth ! Accurate ! Fast! </h2>
    </marquee>

    <!-- Content Section  background: linear-gradient(to right, #f0f4f8, #d9e4f5);-->
    
<v-row class="mt-1">
 
    <v-col cols="12">
    <v-card class="pa-4" style="box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.1); transition: transform 0.3s;">
      <v-card-title class="text-center">
        <h1 class="display-2 font-weight-bold" style="color: darkblue; font-family: 'Times New Roman', serif;">Exchange and Remittances</h1>
      </v-card-title>
      <v-card-subtitle class="text-center mb-4">
        <h2 class="subtitle-1 text-info">Seamless Currency Exchange</h2>
      </v-card-subtitle>
      <v-card-text>
        <v-row class="mt-10">
          <!-- Instant Transfers -->
          <v-col cols="12" md="4" align="center">
            <!-- <v-icon size="80px" color="success">mdi-transfer</v-icon> -->
              <img src="../../assets/Landing/Logo 3 si copy.svg" width="100%" height="150px"><img>
            <div class="ml-20">
              <h1 class="mt-6 font-weight-bold" style="font-family: 'Times New Roman', serif;">Instant Transfers</h1>
              <p class="text-wap mt-6" style="font-size: 20px; padding-left: 30px;padding-right: 30px;">
                Effortlessly exchange currencies between Thailand and Myanmar.</p>
            </div>
          </v-col>
          <!-- Secure Transactions -->
          <v-col cols="12" md="4" align="center">
            <!-- <v-icon size="80px" color="info">mdi-security</v-icon> -->
            <img src="../../assets/Landing/logo 1.svg" width="145px" height="150px"><img>
            <div class="ml-20">
              <h1 class="mt-6 font-weight-bold">Secure Transactions</h1>
              <p class="text-wap mt-6" style="font-size: 20px; padding-left: 30px;padding-right: 30px;">
              Your money is safe with our advanced security measures.</p>
            </div>
            
          </v-col>
          <!-- Competitive Rates -->
          <v-col cols="12" md="4" align="center">
            <!-- <v-icon size="96px" color="warning">mdi-cash</v-icon> -->
            <img src="../../assets/Landing/Logo 2.svg" width="100%" height="150px"><img>
            <div class="ml-20">
              <h1 class="mt-6 font-weight-bold">Competitive Rates</h1>
              <p class="text-wap mt-6" style="font-size: 20px; padding-left: 40px;padding-right: 40px;">
                Enjoy the best exchange rates with minimal fees. Enjoy Your Life!</p>
            </div>
          </v-col>
          
        </v-row>

        <!-- How to Use Our Service -->
        <v-row class="mt-4">
          <!-- <v-col cols="6">
            <h4 class="font-weight-bold">How to Use Our Service</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>1. Go to website: Open your web browser and navigate to the M-Money website.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>2. Register an Account: Follow the simple steps to create your account.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>3. Verify Your Identity: Complete the verification process to ensure secure transactions.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>4. Start Exchanging: Choose the currencies you want to exchange and complete the transaction in minutes.</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col> -->

          <!-- Why Choose Us Section -->
          <!-- <v-col cols="6" height="40px">
            <h4 class="font-weight-bold">Why Choose M-Money?</h4>
            <v-list dense height="210px">
              <v-list-item>
                <v-list-item-content>User-Friendly Interface: Our app is designed for ease of use, making currency exchange simple and quick.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>24/7 Support: Our customer service team is available around the clock to assist you.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Trusted by Thousands: Join the growing community of satisfied users who trust M-Money for their remittance needs.</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col> -->
        </v-row>

        <!-- Call to Action Button -->
        <v-row justify="center" class="mt-10">
          <v-btn color="primary" large rounded>Get Started Now</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
  
</v-row>

<v-row class="mt-12">
  <!-- Image and Video Row -->
  <v-col cols="12" md="12" class="mt-n7">
    <v-row dense class="mt-n4">
      <!-- Remittance Image Section -->
      <v-col cols="12" md="6" class="mt-7">
        <v-card class="ml-3">
          <img
            src="../../assets/remittance.webp"
            width="100%"
            height="370px" rounded
          ><img>
        </v-card>
      </v-col>
      <!-- Video Section -->
      <v-col cols="12" md="6" class="mt-6">
        <v-card class="mt-6">
          <h4 class="font-weight-bold">How to Use Our Service</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>1. Go to website: Open your web browser and navigate to the M-Money website.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>2. Register an Account: Follow the simple steps to create your account.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>3. Verify Your Identity: Complete the verification process to ensure secure transactions.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>4. Start Exchanging: Choose the currencies you want to exchange and complete the transaction in minutes.</v-list-item-content>
              </v-list-item>
            </v-list>
        </v-card>
        
      </v-col>
    </v-row>
  </v-col>
</v-row>


<!-- <v-row class="mt-12">
   Image and Video Row 
  <v-col cols="12" md="12" class="mt-n7">
    <v-row dense class="mt-n4">
       Remittance Image Section 
      <v-col cols="12" md="6" class="mt-7">
        <h4 class="font-weight-bold">Why Choose M-Money?</h4>
            <v-list dense height="210px">
              <v-list-item>
                <v-list-item-content>User-Friendly Interface: Our app is designed for ease of use, making currency exchange simple and quick.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>24/7 Support: Our customer service team is available around the clock to assist you.</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Trusted by Thousands: Join the growing community of satisfied users who trust M-Money for their remittance needs.</v-list-item-content>
              </v-list-item>
            </v-list>
      </v-col>
       Video Section 
      <v-col cols="12" md="6" class="mt-6">
        <v-card class="elevation-2">
          <video autoplay muted loop class="d-block w-100 rounded-lg">
            <source src="\mmoney.mp4" type="video/mp4" />
          </video>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</v-row> -->

<v-row dense>
  <v-col cols="12" sm="12">
    <v-card height="400px" style="background: linear-gradient(to bottom, #e0f7fa, #ffffff); border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row>
        <v-col cols="12" md="4">
          <div class="imageBorder" style="text-align: center;">
            <img src="\sign-up-now.gif" width="145px" height="130px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: transform 0.3s;">
            <h4 style="color: navy; font-family: 'Roboto', sans-serif; font-weight: bold;">Sign up to remmit</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="imageBorder" style="text-align: center;">
            <img src="\money.jpg" width="145px" height="130px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: transform 0.3s;">
            <h4 style="color: navy; font-family: 'Roboto', sans-serif; font-weight: bold;">Money Transfer</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="imageBorder" style="text-align: center;">
            <img src="\world.gif" width="145px" height="130px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: transform 0.3s;">
            <h4 style="color: navy; font-family: 'Roboto', sans-serif; font-weight: bold;">Where are we located?</h4>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</v-row>


    <v-row dense>
      <v-col cols="12" md="12">
        <v-container>
          <center>
            <h1 style="color: darkblue;">Our PartnerShip</h1>
          </center>
          <v-col cols="12" md="12">
            <center>
              <v-row dense>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      KBZ Bank
                    </v-card-title>
                    <img src="\kbz.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      A Bank
                    </v-card-title>
                    <img src="\abank-logo.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      AYA Bank
                    </v-card-title>
                    <img src="\aya.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      Yoma Bank
                    </v-card-title>
                    <img src="\yoma.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      Kasikorn Bank
                    </v-card-title>
                    <img src="\kasikorn.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke" height="140">
                    <v-card-title style="color:darkblue;">
                      Bangkok Bank
                    </v-card-title>
                    <img src="\bangkok.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                  </v-card>
                </v-col>
              </v-row>
            </center>
          </v-col>

        </v-container>
      </v-col>
    </v-row>
    <!-- <v-row dense>
          <v-col cols="12" md="6" class="mt-6">              
              <img src="\mmoney.jpg" width="100%" height="200px">                                     
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
              <h3>ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့<br>ငွေလွှဲကြမယ်</h3>     
          </v-col>   
      </v-row> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showText: false,
      images: [
        '\pagoda.png',
        '\office.jpg',
        '\office4.jpg',
      ],
      items: [
        {
          src: 'homethree.png',
        },
        {
          src: 'hometwo.jpg',
        },
        {
          src: 'homefive.jpg',
        },
        {
          src: 'mmoneyone.jpg',
        },
        {
          src: 'homeone.webp',
        },
      ],
    };
  },
  mounted() {
    // This will make the text appear with a delay of 500ms
    setTimeout(() => {
      this.showText = true;
    }, 500);
  },
};
</script>
<style>
/* .main{
  background-color: #AED8FF;
} */
h3 {
  text-align: center;
  padding-top: 60px;
  font-size: xx-large;
}

h4 {
  text-align: center;
}

h1 {
  font-family: 'Times New Roman', serif;
}

video {
  border: 1px solid black;
}

.imageBorder {
  margin: 50px 100px;
  width: 180px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
}

.imageBorder:hover{
  display: block;
    transition: transform 0.5s ease-in-out;
    transform: scale(1.1);
    color: black;
}

.carousel-image {
  width: 100%;
  max-height: 400px;
  /* Set a max height for the images */
}

/* Fade-in animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.carousel-image {
  width: 100%;
  /* Adjust width as needed */
  height: 300px;
  /* Set a fixed height or adjust accordingly */
  object-fit: cover;
  /* Ensures the image maintains its aspect ratio */
}
</style>

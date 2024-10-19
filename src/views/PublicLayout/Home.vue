<template>
  <div>
      <v-row dense>
          <v-col cols="12" md="12" class="" height="30%">
            <v-card>
            <v-carousel hide-delimiters  style="height: 650px;">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i" class="carousel-image" 
                :src="item.src" height="100%" width="100%"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-card>
          </v-col>
      </v-row>
      <marquee color="blue" class="mt-2"><h2 style="color: darkblue; font-family: 'Times New Roman', serif;">Let's Transfer Money from Thailand to Myanmar.  Trustworth !  Accurate !  Fast! </h2></marquee>
      <v-col cols="12" md="12" class="mt-n7">
        <v-row dense class="mt-n4">
          <v-col cols="12" md="6" class="mt-7">
              <img src="../../assets/remittance.webp" width="100%" height="370px">
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
              <video autoplay muted loop class="d-block w-100">
                  <source src="\mmoney.mp4" type="video/mp4">
              </video>    
          </v-col>
        </v-row>
      </v-col>
      <v-row dense>
       
      <v-col cols="12" md="12" class="mt-n2">
        <v-row dense>
          <v-col cols="12" md="12">
            <v-card variant="outlined" style="color:darkblue;  background-color: whitesmoke;">
              <v-row dense>
                <v-col cols="12" md="4" class="mt-6">
                  <div class=" imageBorder">
                      <img src="\sign-up-now.gif" width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                      <h4 style="color:darkblue;">Sign up to remmit</h4>
                  </div>
              </v-col>
              <v-col cols="12" md="4" class="mt-6">
                <div class=" imageBorder">
                    <img src="\money.jpg"  width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                    <h4  style="color:darkblue;">Money Transfer</h4>
                </div>
            </v-col> 
             
          <v-col cols="12" md="4" class="mt-6">
              <div class=" imageBorder">
                  <img src="\world.gif" width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                  <h4  style="color:darkblue;">Where are we located?</h4>
              </div>
          </v-col>  
          </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
      <v-row dense="">
        <v-col cols="12" md="12">
          <v-container>
            <center><h1 style="color: darkblue;">Our PartnerShip</h1></center>
            <v-col cols="12" md="12">
              <center>
              <v-row dense>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke"   height="140">
                    <v-card-title style="color:darkblue;">
                      KBZ Bank
                    </v-card-title>
                    <img src="\kbz.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke"  height="140">
                    <v-card-title style="color:darkblue;">
                      A Bank
                    </v-card-title>
                    <img src="\abank-logo.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke"   height="140">
                    <v-card-title style="color:darkblue;">
                      AYA Bank
                    </v-card-title>
                    <img src="\aya.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke"   height="140">
                    <v-card-title style="color:darkblue;">
                      Yoma Bank
                    </v-card-title>
                    <img src="\yoma.png" width="145px" style="padding-left: 5px; padding-top: 5px;">
                </v-card>
                </v-col>
                <v-col cols="12" md="2">
                  <v-card style="background-color:whitesmoke"  height="140">
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
h3{
  text-align: center;
  padding-top: 60px;
  font-size: xx-large;
}
h4{
  text-align: center;
}
h1 {
  font-family: 'Times New Roman', serif;
}
video{
  border: 1px solid black ;
}
.imageBorder{
  margin: 50px 100px;
  width: 150px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white
}
.carousel-image {
width: 100%;
max-height: 400px; /* Set a max height for the images */
}
/* Fade-in animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.carousel-image {
  width: 100%; /* Adjust width as needed */
  height: 300px; /* Set a fixed height or adjust accordingly */
  object-fit: cover; /* Ensures the image maintains its aspect ratio */
}
</style>


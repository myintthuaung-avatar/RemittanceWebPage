<template>
    <div class="main">
        <v-row dense>
            <v-col cols="12" md="12" class="mt-6">
                <!-- <div>
                    <img src="C:\Users\User\OneDrive\Pictures\landing page\pagoda.png" width="100%" height="300px">
                </div> -->
                <v-carousel cycle height="400">
                    <v-carousel-item v-for="(image, index) in images" :key="index">
                        <v-img :src="image" class="carousel-image" />
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" md="6" class="mt-6">
                <h3>ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့<br>ငွေလွှဲကြမယ်</h3>  
                <h1 style="font-family:Arial, Helvetica, sans-serif; font-size: 30px; color: white  ; text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">M Money</h1>                       
            </v-col>
            <v-col cols="12" md="6" class="mt-6">
                <video autoplay muted loop class="d-block w-100">
                    <source src="\mmoney.mp4" type="video/mp4">
                </video>    
            </v-col>   
        </v-row>
        <v-row dense>
            <v-col cols="12" md="4" class="mt-6">
                <div class=" imageBorder">
                    <img src="\transfer.gif" width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                    <h4>Money Transfer</h4>
                </div>
            </v-col>  
            <v-col cols="12" md="4" class="mt-6">
                <div class=" imageBorder">
                    <img src="\register.gif" width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                    <h4>Sign up to remmit</h4>
                </div>
            </v-col>  
            <v-col cols="12" md="4" class="mt-6">
                <div class=" imageBorder">
                    <img src="\map.gif" width="145px" height="130px" style="padding-left: 5px; padding-top: 5px;">
                    <h4>Where are we located?</h4>
                </div>
            </v-col>  
        </v-row>
        <v-row dense>
            <v-col cols="12" md="6" class="mt-6">              
                <img src="\mmoney.jpg" width="100%" height="200px">                                     
            </v-col>
            <v-col cols="12" md="6" class="mt-6">
                <h3>ထိုင်းနိုင်ငံမှ မြန်မာနိုင်ငံသို့<br>ငွေလွှဲကြမယ်</h3>     
            </v-col>   
        </v-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        '\pagoda.png',
        '\office.jpg',
        '\office4.jpg',
      ],
    };
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
</style>


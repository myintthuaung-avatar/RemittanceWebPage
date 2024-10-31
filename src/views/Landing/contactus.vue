<template>
    <div>
        <v-row dense style="margin: 35px 0">
            <v-col cols="12" md="12">
                <v-img src="/src/assets/contact.jpg" cover></v-img>
            </v-col>
        </v-row>
        <v-row dense style="margin: 20px;">
            <v-col cols="12" md="4">
                <v-card style="border: 1px solid black; border-radius: 10px;" width="400px" height="300px" class="animate__animated animate__fadeInUp animate_delay-1s" v-if="showCard">
                    <v-toolbar style="background-color: darkblue;">
                        <v-toolbar-title style="color:white; font-family: 'Times New Roman', Times, serif;" class="text-center">MYANMAR(MAIN BRANCH)</v-toolbar-title>
                    </v-toolbar>
                    <p style="font-family: 'Times New Roman', Times, serif; padding: 20px">No.464, 12 Ward, Insein Road,Hlaing Township,<br>Yangon. Myanmar.</p>
                    <p style="font-family: 'Times New Roman', Times, serif; padding-left: 20px ;">🕘Monday to Sunday (8:30 to 17:30)</p>  
                    <p style="margin-left: 30px; width: 200px; height: 40px; border: 3px solid darkblue; border-radius:90px; margin-top: 20px; margin-left: 150px; padding: 5px 20px;">☎️+959880896947</p>                            
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card style="border: 1px solid black; border-radius: 10px;" width="400px" height="300px" class="animate__animated animate__fadeInDown animate_delay-1s" v-if="showCard">
                    <v-toolbar style="background-color: darkblue;">
                        <v-toolbar-title style="color:white; font-family: 'Times New Roman', Times, serif;" class="text-center">THAILAND(BANGKOK BRANCH)</v-toolbar-title>
                    </v-toolbar>
                    <p style="font-family: 'Times New Roman', Times, serif; padding: 20px">Holiday Inn Bangkok Silom Hotel,Silom Road, Silom Subdistrict,Bangrak District, Bangkok 10500</p>
                    <p style="font-family: 'Times New Roman', Times, serif; padding-left: 20px ;">🕘Monday to Sunday (9:00 to 19:00)</p>  
                    <p style="margin-left: 30px; width: 200px; height: 40px; border: 3px solid darkblue; border-radius:90px; margin-top: 20px; margin-left: 150px; padding: 5px 20px;">☎️+66814787457</p>            
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card style="border: 1px solid black; border-radius: 10px;" width="400px" height="300px" class="animate__animated animate__fadeInUp animate_delay-1s" v-if="showCard">
                    <v-toolbar style="background-color: darkblue;">
                        <v-toolbar-title style="color:white; font-family: 'Times New Roman', Times, serif;" class="text-center">THAILAND</v-toolbar-title>
                    </v-toolbar>
                    <p style="font-family: 'Times New Roman', Times, serif; padding: 20px">Mahar Nwe Shopping Complex, 32,8 Setthakij 1 Rd, Tha Sai, Mueang Samut Sakhon District,Samut Sakhon 74000</p>
                    <p style="font-family: 'Times New Roman', Times, serif; padding-left: 20px ;">🕘Monday to Sunday (9:00 to 19:00)</p>  
                    <p style="margin-left: 30px; width: 200px; height: 40px; border: 3px solid darkblue; border-radius:90px; margin-top: 20px; margin-left: 150px; padding: 5px 20px;">☎️+66618212470</p>            
                </v-card>
            </v-col>
        </v-row>
        
        <v-row dense style="margin:40px;">   
            <v-col cols="12" md="12">
                <v-card style="padding:20px 30px;">
                    <v-row>
                        <v-col cols="12" md="1">
                            <a href=" https://t.me/mmoneythailand"><v-img src="/src/assets/telegram.png" width="50px" height="50px" style="border-radius: 10px;"></v-img></a> 
                        </v-col>
                        <v-col cols="12" md="1">
                            <a href="https://invite.viber.com/"><v-img src="/src/assets/viber.png" width="50px" height="50px" style="border-radius: 10px;"></v-img></a> 
                        </v-col>
                        <v-col cols="12" md="1">
                            <a href="https://www.facebook.com/mmoneythailand?mibextid=JRoKGi"><v-img src="/src/assets/facebook.png" width="50px" height="50px" style="border-radius: 10px;"></v-img></a>                
                        </v-col> 
                        <v-col cols="12" md="1">
                            <v-img src="/src/assets/line.png" width="50px" height="50px" style="border-radius: 10px;"></v-img>
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-img src="/src/assets/code.png" width="50px" height="50px"></v-img>                 
                        </v-col>   
                        <v-col cols="12" md="1">
                            <v-img src="/src/assets/email.png" width="50px" height="50px"></v-img>               
                        </v-col>      
                        <v-col cols="12" md="3" class="mt-4">
                            <span>info@maharbawgamoney.com</span>  
                        </v-col>
                    </v-row>     
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="mx-auto" elevation="12" max-width="500" style="padding: 20px;">                                                              
                    <v-form>                        
                        <v-text-field color="primary" label="Name" clearable variant="outlined" density="compact"></v-text-field>
                        <v-text-field color="primary" label="Email" clearable variant="outlined" density="compact"></v-text-field>                    
                        <v-textarea color="primary" label="Message" clearable variant="outlined" density="compact"></v-textarea>                    
                        <v-btn type="submit" color="primary" class="mt-3" block>SEND MESSAGE</v-btn>                            
                    </v-form>                                                                        
                </v-card>                           
            </v-col>
        </v-row>

        <v-row dense>
            <v-col cols="12" md="12" style="margin: 20px 0px;">
                <h1 style="font-family: 'Times New Roman', Times, serif; color: darkblue; text-align: center;">Our Branches</h1>
            </v-col>
        </v-row>
        <v-row dense style="margin-bottom: 20px;">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1WAQnUPHahGEiZY3Y9EMGcLxEDXPM_jY&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
        </v-row>
    </div>
</template>  
<script>
import 'animate.css';
export default{
   data(){
    return{
        showCard : false,
    };
   },
   mounted(){
    setTimeout(()=>{
        this.showCard = true;
    },500);
   },

};
</script>
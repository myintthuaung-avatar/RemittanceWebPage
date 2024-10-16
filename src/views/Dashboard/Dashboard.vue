<style>
.custom-datepicker {
  z-index: 9999 !important;
  position: relative;
}
</style>
<template>
      <v-col cols="12" md="12" style="background-color: lightgray;">
                <v-row dense>
                    <v-col cols="12" md="4">
                      <VueDatePicker v-model="model.fromdate" :enable-time-picker="false"  :format="format" />
                      <span v-show="transaction_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                      class="text-red">To Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                    </v-col>
                    <v-col cols="12" md="4">
                        <VueDatePicker v-model="model.todate" :enable-time-picker="false"  />
                        <span v-show="transaction_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                          class="text-red">To Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                      </v-col>
                    <v-col cols="12" md="4" class="mt-1">
                      <v-btn @click="Filter()" variant="outlined" class="mr-3" size="small" style="background: white;">
                        <v-icon size="20" color="success">mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn @click="ClearData()" variant="outlined" class="mr-3" size="small" style="background: white;">
                        <v-icon size="20" color="red">mdi-broom</v-icon>
                    </v-btn>
                    </v-col>
                </v-row>
                
      </v-col>
      <v-col cols="12" md="12" style="background-color: lightgray;" class="mt-n5">
        <v-row dense>
          <v-col cols="12" md="4" id="chart">
            <v-card height="270">
              <apexchart type="donut" width="380" :options="chartOptiontotal" :series="customerseries"></apexchart>
            </v-card>
          </v-col>
           <v-col cols="12" md="4" id="chart">
               <v-card height="270">
                <apexchart type="pie" width="380" :options="transactionchart" :series="transactionamountseries"></apexchart>
               </v-card>
           </v-col>
            <v-col cols="12" md="4" id="chart">
               <v-card height="270">
                <apexchart type="pie" width="300" :options="networktypeoptions" :series="networktypeseries"></apexchart>
               </v-card>
           </v-col>
  
           <v-col cols="12" md="12">
               <v-card>
             <v-card-title class="pb-1 pt-1 ctitlebg" style="color: #000; font-weight: bold; font-size: 13px;">
              Report Transaction Amount By Current Month To Last Eleven Months(For One Year)</v-card-title>
               <div id="chart2">
                <apexchart type="bar" height="350" :options="chartOptions" color="blue" :series="monthlywithdrawdeposit"></apexchart>
                </div>
               </v-card>
           </v-col>
        </v-row>
      </v-col>
  </template>
  
  <script>
  import VueApexCharts from "vue3-apexcharts";
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  import Model from '@/models/dashboard.js';
  import Service from '@/services/dashboard.serivce.js';
  export default {
    components: {
      apexchart: VueApexCharts,VueDatePicker
          },
    data: () => ({
      model:new Model(),
      customerseries: [],
      transactionamountseries:[],
      networktypeseries:[],
      monthlywithdrawdeposit:[],
      withdrawamountlist:[],
      depositamountlist:[],
      transactionchart: {
        title: {
              text: "Transaction Amount"
            },
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Withdraw', 'Deposit'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      },
          chartOptiontotal: {
            chart: {
              width: 280,
              type: 'donut',
              dropShadow: {
                enabled: true,
                color: 'blue',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
              }
            },
            stroke: {
              width: 0,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
            labels: ["Old Customer", "New Customer"],
            dataLabels: {
             
            },
            fill: {
            type: 'pattern',
              opacity: 1,
              pattern: {
                enabled: true,
                style: ['squares', 'circles'],
              },
            },
            states: {
              hover: {
                filter: 'none'
              }
            },
            theme: {
              palette: 'palette2'
            },
            title: {
              text: "Customer"
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          networktypeoptions: {
            title: {
              text: "Network Types"
            },
            chart: {
              width: '80%',
              height: '80%',
              type: 'pie',
            },
            labels: [
              'Swift',
              'Money Gram',
              'Westren Union',
              'Wise',
              'Own Remittance Network',
              'Other',
            ],
            theme: {
              monochrome: {
                enabled: true,
              },
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -5,
                },
              },
            },
            grid: {
              padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            },
            dataLabels: {
              formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
              },
            },
            legend: {
              show: false,
            },
          },
          
          chartOptions: {
            chart: {
              type: 'bar',
              height: 400,
              
            },
            plotOptions: {
              bar: {
                borderRadius: 2,
                borderRadiusApplication: 'end',
                vertical: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories:[]
            }
          },
        
    }),
  
    created() {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      this.model.fromdate = new Date(currentYear, currentMonth, 1);

      const currentMonthLastDate = new Date().getMonth() + 1; // Get the next month
      this.model.todate = new Date(currentYear, currentMonthLastDate, 0); // 0th day of next month gives the last day of the current month
       this.Filter();
    },
    methods:{
      Filter(){
        // let fromdateObj = new Date(this.model.fromdate);
        // let isofromDate = fromdateObj.toISOString();
        // let formattedfromDate = isofromDate.slice(0, 19).replace('T', ' ');  // "2024-09-14 11:54:00"
        // let todateObj = new Date(this.model.todate);
        // let isotodateDate = todateObj.toISOString();
        // let formattedtoDate = isotodateDate.slice(0, 19).replace('T', ' ');  // "2024-09-14 11:54:00"
        // this.model.fromdate = formattedfromDate;
        // this.model.todate = formattedtoDate;
        this.customerseries=[];
        this.transactionamountseries=[];
        this.networktypeseries=[];
        this.withdrawamountlist=[];
        this.depositamountlist=[];
        this.chartOptions.xaxis.categories=[];
        this.monthlywithdrawdeposit=[];
        Service.GetAllByDate(this.model).then((result) => {
                    if (result.data) {
                       
                       this.customerseries = [result.data.new_customer,result.data.old_customer];
                       this.transactionamountseries = [result.data.withdraw_amount, result.data.deposit_amount];
                       result.data.network_types.forEach(element => {
                        this.networktypeseries.push(element.customer_count);
                       });
                       result.data.monthly_withdrawdeposit.forEach(element => {
                        this.withdrawamountlist.push(element.withdraw_amount);
                        this.depositamountlist.push(element.deposit_amount);
                        this.chartOptions.xaxis.categories.push(element.month);
                       });
                       this.monthlywithdrawdeposit= [
                            {
                              name: 'Withdraw Amount',
                              data: this.withdrawamountlist,
                            }, 
                            {
                              name: 'Deposit Amount',
                              data : this.depositamountlist,
                            }
                          ];
                       window.console.log(this.monthlywithdrawdeposit);
                    }
                });

        }
      }
    
  };
  </script>
  
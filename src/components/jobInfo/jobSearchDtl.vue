<template>
  <body>
    <div class="container-fluid">
      <div class="row">
        <!-- 메인 이미지 -->
        <div class="submenuimage ">
          <p class="subtitle">구인정보</p>
        </div>
        <div class="container">
          <!-- 게시판시작 -->
          <SearchBar />
          <div class="overflow">
            <!-- 테이블 -->
            <v-card>
              
              <v-data-table
               class="row-pointer mt-4"
          :headers="headers"
          :items="tableList"
          :search="search" 
                
              >
               


               <template v-slot:item="props">
                 <template  v-if="props != undefined">
                 
               
          <tr class="job-info" @click="moveDtlPage(props.item.jobNo)" >
            
            <td>{{props.item.company}}</td>
            <td><p id="job-title">{{props.item.title}}</p><p>
              
              <table>
                <tr > 
              <td class="title-dtl"><span>{{props.item.career}}</span></td>
              <td class="title-dtl"><span>{{props.item.holidayTpNm}}</span></td>
              <td class="title-dtl"><span>{{props.item.region}}</span></td>
              </tr>
              </table>
              </p></td>
            <td>{{props.item.ability}}</td>
            <td>{{props.item.Condition}}</td>
            <td v-if="props.item.deadline.includes('채용시까지')">
             채용시까지</td>
            <td v-else>
              <!-- d-day 7일이하  -->
              <b-btn class="d-day-btn argent-btn mr-2"
              v-if="($moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 ) <= 7">D-
              {{$moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 }}
              </b-btn>
              <!-- d-day 20일이하  -->
              <b-btn class="d-day-btn warn-btn mr-2" 
              v-else-if="($moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 ) > 7 &&
              ($moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 ) <=20 ">D-
              {{$moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 }}
              </b-btn>

              <b-btn class="d-day-btn ok-btn mr-2" v-else>D-
              {{$moment($moment(20+props.item.deadline).format('YYYY-MM-DD')).diff($moment(new Date()), 'days') + 1 }}
              </b-btn>
              {{ props.item.deadline}}
            </td>
          </tr>
                 </template>

                <template v-else>
                   <tr>
                     <td>검색 결과가 존재하지 않습니다. </td>
                   </tr>
                 </template>
                  </template>
                  
      
                   </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import SearchBar from "../SearchBar";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("jobStore");

export default {
  data: () => ({
    search: "",

    headers: [
      { text: "기업명", value: "company" },
      { text: "제목", value: "title" },
      { text: "지원자격", value: "ability" },
      { text: "근무조건", value: "Condition" },
      { text: "마감일·등록일", value: "deadline" },
    ],
  }),
  components: {
    SearchBar,
  },
  async mounted() {
    await this.$store.dispatch("jobStore/searchLoadTable", this.$route.query);
    
  },

  methods: {
    //상세페이지로 이동
    moveDtlPage: function(e) {
      
      this.$router.replace({ name: "jobInfoDtl", params: { wantedNo: e } });
    },
  },
  computed: {
    ...mapState([
      //매핑값
      "tableList",
      "jobInfo",
    ]),
  },
};
</script>

<style scoped>
*{
   font-family: "Noto Sans KR", sans-serif;
}

.submenuimage {
  background-image: url("../../assets/images/job-search.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0.7;
  height: 180px;
  background-color: #f4eeff;
  text-align: center;
  line-height: 180px;
}
.subtitle {
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px #4e515763;
  font-size: 50px;
}
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}

.overflow .v-card {
  margin-bottom: 50px;
  box-shadow: 0 0 black !important;
}
.submenuimage {
  width: 100%;
  height: 180px;
  background-color: #f4eeff;
  text-align: center;
  line-height: 180px;
}

.sub-header {
  position: relative;
  padding-top: 45px;
  text-align: center;
}
.v-slide-group__content {
  justify-content: center;
}

.search-bar {
  width: 30%;
  margin-left: 72%;
}

#job-title{
  font-size: 16px;
  margin-top: 13px;
}
.title-dtl{
  width:120px;
}
.job-info{
  height: 100px !important;
}

.d-day-btn{
  height: 26px !important;
    width: 45px !important;
    font-size: 13px;
    padding: 0px;
    display: inline-block;
    cursor: auto !important;
    pointer-events: none;
    border:0px;
    font-weight: bold;
}
.argent-btn{
  background-color: #cf1b1b !important;
}
.warn-btn{
  background-color: #fddb3a !important;
}
.ok-btn{
  background-color: #158467 !important;
}
.row-pointer >>> thead tr{
  background-color: #ededed;
  border-top: 2px solid #d5d5d5;
}
.row-pointer >>> thead tr th span{
  font-size:15px;
  font-weight: bold;
  color:#4e5157
}
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}

.overflow .v-card{
  margin-bottom: 50px;
  box-shadow: 0 0 black !important;
}
.submenuimage{
    width: 100%;
    height:180px;
    background-color:#F4EEFF;
    text-align: center;
    line-height: 180px;
}
</style>

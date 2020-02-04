<template>
  <div>
    <div class="container box">
      <div class="row">
        <div class= "opt">
          <p class = "par">1.<br>Which of these options<br> completes the progression?</p>
          <br>
          <div class="custom-control custom-radio mt-2 rd">
              <input type="radio" class="custom-control-input" name="customRadio" id="customRadio2" checked>
              <label class="custom-control-label" for="customRadio2">Answer 1</label>
          </div>
          <div class="custom-control custom-radio mt-3 rd">
              <input type="radio" class="custom-control-input" name="customRadio" id="customRadio3" checked>
              <label class="custom-control-label" for="customRadio3">Answer 2</label>
          </div>
          <div class="custom-control custom-radio mt-4 rd">
              <input type="radio" class="custom-control-input" name="customRadio" id="customRadio4" checked>
              <label class="custom-control-label" for="customRadio4">Answer 3</label>
          </div>
  <br>
          <!-- <button type="button" class="btn bt">Next<i class="fas fa-long-arrow-alt-right arw"></i></button>
           -->
           <button type="button" class="btn bt"  v-if="!timer"
      @click="startTimer">Next<i class="fas fa-long-arrow-alt-right arw"></i></button>
        </div>
    </div>
    </div>
      <div class="box1"></div> 
      <Timer />
  </div>
</template>

<script>
import Timer from "./Timer.vue"

    export default {
  name: 'Navbar',
  components: {
      Timer
  }
    }


</script>

<style scoped>
.box{
  position: relative;
  width: 80%;
  margin-top: 60px;
  background: #FFFFFF;
  box-shadow: 0px 15px 30px rgba(206, 196, 196, 0.15);
  border-radius: 12px 12px 0px 0px;
}
.box:after {
  content: "";
  display: block;
  padding-bottom: 49%;
}

.opt {
  position: absolute;
  padding-top: 46px;
  padding-left: 50px;
  width: 100%;
  height: 40%;
}

.par{
padding-top: 32px;
padding-left: 80px;
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 23px;
color: #960C0C;
}

.form-check{
  padding-left: 120px;
  /* width: 176.85px; */
   height: 40px; 
  /* line-height: 23px; */
  /* left: 345px;
  top: 621px; */
}

.bt{
  position: absolute;
  color: #FF2E2E;
  padding-left: 20px;
  margin-top: 23px;
  margin-left:  80px;
  border: 2px solid #FF2E2E;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
}

.arw{
  /* right: 1200px; */
  color: #FF2E2E;
  padding-left: 15px;
  left: 15px;
}

.rd{
  margin-left: 100px;
  /* position: absolute; */
  width: 178.85px;
  height: 21.15px;
  left: 5px;
  top: 1px;

}

 .box1{
  position: absolute;
   width: 430px;
  height: 340px;
  left: 820px;
  top: 230px; 

  background: #FFF0CE;
  border-radius: 12px;
} 



</style>
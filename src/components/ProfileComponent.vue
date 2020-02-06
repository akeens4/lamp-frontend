<template>
  <div class="container-fluid wrapper">  
      <div class="row">
        <div class="body-wrapper">
            <div class="wrapper">
                <img>
                <div>
                    <label for="">Applicant Records</label>
                    <label for="">Hello, {{applicant_name}}</label>
                </div>
            </div>
        </div>
      </div>    
    <div class="container-fluid conbox">
        <div class="row">
            <div class="col-sm-3 conboxCol">
                <img src="./bak.svg">
            </div>
            <div class="col-sm-6 conboxCol">
                
            </div>
            <div class="col-sm-3 conboxCol">
                
            </div>
        </div>
        <div class="row conboxCol2">
            <div class="col-sm-3 menu">
                
                <p><span> <img src="./summary.svg" class="spanImg">Summary </span></p>
                <p><span> <img src="./info.svg" class="spanImg">Full Info </span></p>
                <p><span> <img src="./apt.svg" class="spanImg">Aptitude Test </span></p>
                <p><span> <img src="./act.svg" class="spanImg">Activity Log </span></p>
                <p style="padding-top: 3rem;"><span> <img src="./Scul.svg" class="spanImg" >Back to Records </span></p>
                

                </div>
            <div class="col-sm-6 first">
                
                <div class="row">
                    <form>
                    
                    <h3>Progress</h3><br>
                    
                    <div class="form-group">
                        <div class="col-dm-4">
                            <p>Application Status: Applicant</p>
                        </div>
                        <div class="col-dm-4">
                            <p>Tuition Paid: NGN 50,000</p>
                        </div>
                        <div class="col-dm-4">
                            <p>Tuition Paid: NGN 50,000</p>
                        </div>
                    </div>
                    </form>
                </div>
                <div class="row">
                    
                </div>
            </div>
            <div class="col-sm-3">
                <h3>Hello</h3>
            </div>
        </div>
        
        
    </div>
  </div>            
</template>

<script>
    export default {
  name: 'ProfileComponent',
    }

</script>

<style src="./Register.css" scoped>

</style>
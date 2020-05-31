$(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() == 0){$("#to_up").hide()}else{$("#to_up").show()}
    })
  $("#to_up").click(function(){$("html,body").animate({scrollTop:0},800)})
// -------------------------------------------
$(".se-pre-con").click(function() {$(this).fadeOut("slow")});

// *******************
$("#nav .trans").on("click",function(){
    let target=$(this).attr("href")
    $("body , html").animate({scrollTop:$(target).offset().top-100},800)
})

})
// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
    }
};
xhttp.open("GET", "topics.json", true);
xhttp.onload=function(){
    var route ="img/"
    var data=JSON.parse(xhttp.response)
    var txt=''
    for(i=0;i<data.length;i++)
    {
        txt+=`
            <div id="cardF" class="col-10 col-lg-4 p-3 m-3">
            <h4 id="${"dash"+data[i].id}" class="text-center text-danger">${data[i].titleCard}</h4>
            <div  class="text-center"><img class="cardimg" src="${route+data[i].img}" alt="" width="150"></div>
            <h4 class="text-center my-2"><a class="text-info" href="${data[i].urlCard}" target="_bank">View Website</a></h4>
            <hr>`     
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {


            }
        };
        xhttp2.open("POST", "https://breaktxt.000webhostapp.com/returnData/", false );
        xhttp2.onload=function(){
                var v_001=JSON.parse(xhttp2.responseText)
                 txt+=`<div class="row justify-content-around"">
                         <h5 class="text-dark col-6">In Day</h5>
                         <h4 class="text-info col"><i class="fas fa-hand-point-right"></i></h4>
                         <h4 class="text-danger col">${v_001.in_day}</h4>
                     </div>
                     <div class="row justify-content-around">
                         <h5 class="text-dark col-6">In yesterday</h5>
                         <h4 class="text-info col"><i class="fas fa-hand-point-right"></i></h4>
                         <h4 class="text-danger col">${v_001.in_yes}</h4>
                     </div>
                     <div class="row justify-content-around">
                         <h5 class="text-dark col-6">This Month</h5>
                         <h4 class="text-info col"><i class="fas fa-hand-point-right"></i></h4>
                         <h4 class="text-danger col">${v_001.in_month}</h4>
                     </div>
                     <div class="row justify-content-around">
                         <h5 class="text-dark col-6">This Year</h5>
                         <h4 class="text-info col"><i class="fas fa-hand-point-right"></i></h4>
                         <h4 class="text-danger col">${v_001.in_year}</h4>
                     </div>
                     <hr>
                     <div class="row justify-content-around">
                         <h3 class="text-primary col-6">All Time</h3>
                         <h4 class="text-info col"><i class="fas fa-hand-point-right"></i></h4>
                         <h3 class="text-danger col">${v_001.in_all}</h3>
                     </div></div>`

            }
            xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp2.send("tableName="+data[i].code);

        
    }
    document.getElementById('contant').innerHTML=txt
}
xhttp.send();





        

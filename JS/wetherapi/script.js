$(document).ready(function(){
  $("#getWeatherForcast").click(function(){
    var city = $("#city").val();
    var key = "258e4afd6d1c094836b04af18fa43efc";

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      dataType: "json",
      type : "GET",
      data : {q:city, appid: key, units: "metrics"},

      success : function(data){
        var wf = "";
        $.each(data.weather, function(index, val){
          wf += "<p><b>" + data.name + "</b><img src=" + val.icon + ".png></p>" + data.main.temp + "&deg;F " + " | " + val.main + ", " + val.description ; 
        });
        $("#showWeaterForcast").html(wf);
      }
    });


  });

} );






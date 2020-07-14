var kalz = document.getElementById("kalLoc");
var chks = document.getElementById("uloc");
var anuz = document.getElementById("anuLoc");

var kalb = document.getElementById("kalBtn");
var ttb = document.getElementById("TBtn");
var anub = document.getElementById("anuBtn");

var chek = 0;
var YouM;
var cirl;

function ch (va) {
    var ma = chek+va; 
    chek = ma;
    if(chek == 1)
        {
            if(navigator.geolocation)
           {navigator.geolocation.getCurrentPosition(function(pos)
        {
               var ulat = pos.coords.latitude;
                var ulong = pos.coords.longitude;
                var ref = "You";

                    mymap.panTo(new L.LatLng(ulat,ulong));

                var myIcon = L.icon({
                    iconUrl: 'iconz/blue.png',
                    iconSize: [30, 30],
                });


                YouM =  L.marker([ulat,ulong],{icon: myIcon}).addTo(mymap).bindTooltip(ref);
                cirl = L.circle([ulat,ulong], {
            color: 'blue',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 200
        }).addTo(mymap);
                cirl.bindTooltip("200M");
            });
        }
        }
    else
        {
            mymap.removeLayer(YouM);
            mymap.removeLayer(cirl);
            chek=0;
        }
    
}
    

kalz.onclick = function () {
    
    mymap.panTo(new L.LatLng(12.506312, 80.159343));
}

anuz.onclick = function () {
    
            mymap.panTo(new L.LatLng(12.564257, 80.129435));
}


ttb.onclick = function()
{
        $('#pls').text("Please Wait !!");

      $.getJSON("Json/kpm.json",function (json) {
    var len = json.Count.length;
    
    $('#tot').text(json.Count[len-1].total);
    $('#rec').text(json.Count[len-1].rec);
    $('#hos').text(json.Count[len-1].hos);
    $('#dea').text(json.Count[len-1].dea);

    var tcon = json.Count[len-1].total - json.Count[len-2].total;
    var trec = json.Count[len-1].rec - json.Count[len-2].rec;
    var tdea = json.Count[len-1].dea - json.Count[len-2].dea;

    $('#ttot').text(tcon);
    $('#trec').text(trec);
    $('#tdea').text(tdea);

    $('#pls').text("");
    var i;
    var area = "";

})
}

kalb.onclick = function()
{
              $('#pls').text("Please Wait !!");

      $.getJSON("Json/kpm.json",function (json) {
    var len = json.Kal.length;
          

    $('#tot').text(json.Kal[len-1].total);
    $('#rec').text(json.Kal[len-1].rec);
    $('#hos').text(json.Kal[len-1].hos);
    $('#dea').text(json.Kal[len-1].dea);

    var tcon = json.Kal[len-1].total - json.Kal[len-2].total;
    var trec = json.Kal[len-1].rec - json.Kal[len-2].rec;
    var tdea = json.Kal[len-1].dea - json.Kal[len-2].dea;

    $('#ttot').text(tcon);
    $('#trec').text(trec);
    $('#tdea').text(tdea);

    $('#pls').text("");  
    var i;
    var area = "";
          

})

}
  
              
anub.onclick = function()
{
              $('#pls').text("Please Wait !!");

      $.getJSON("Json/kpm.json",function (json) {
    var len = json.Anu.length;
    
    $('#tot').text(json.Anu[len-1].total);
    $('#rec').text(json.Anu[len-1].rec);
    $('#hos').text(json.Anu[len-1].hos);
    $('#dea').text(json.Anu[len-1].dea);

    var tcon = json.Anu[len-1].total - json.Anu[len-2].total;
    var trec = json.Anu[len-1].rec - json.Anu[len-2].rec;
    var tdea = json.Anu[len-1].dea - json.Anu[len-2].dea;

    $('#ttot').text(tcon);
    $('#trec').text(trec);
    $('#tdea').text(tdea);

          $('#pls').text("");
    var i;
    var area = "";

})
}
  
              
              
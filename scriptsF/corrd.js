$.getJSON("Json/kpmMap.json",function (json) {
    var i = 0;
    //Kalpakkam Active
    for(i = 0;i<json.Kal.length;i++)
    {
        var lat = json.Kal[i].lat;
        var lng = json.Kal[i].lng;
        var addr = json.Kal[i].name;
        var door = json.Kal[i].door;
        var count = json.Kal[i].num;
        var ref = "<b>"+addr+"</b><br>Number of Cases - "+count;

        var myIcon = L.icon({
            iconUrl: 'iconz/red.png',
            iconSize: [30, 30],
        });

        L.marker([lat, lng],{icon: myIcon}).addTo(mymap).bindTooltip(ref);
        // L.marker([json[0][1][i].lat, json[0][1][i].lng]).addTo(mymap);

    }
    //Anupuram Active
    for(i = 0;i<json.Anu.length;i++)
    {
        var lat = json.Anu[i].lat;
        var lng = json.Anu[i].lng;
        var addr = json.Anu[i].name;
        var door = json.Anu[i].door;
        var count = json.Anu[i].num;
        var ref = "<b>"+addr+"</b><br>Number of Cases - "+count;


        var myIcon = L.icon({
            iconUrl: 'iconz/red.png',
            iconSize: [30, 30],
        });

        L.marker([lat, lng],{icon: myIcon}).addTo(mymap).bindTooltip(ref);
        // L.marker([json[0][1][i].lat, json[0][1][i].lng]).addTo(mymap);

    }


    //Today
    for(i = 0;i<json.Today.length;i++)
    {
        var lat = json.Today[i].lat;
        var lng = json.Today[i].lng;
        var addr = json.Today[i].name;
        var door = json.Today[i].door;
        var count = json.Today[i].num;
        var ref = "<b>"+addr+"</b><br>Number of Cases - "+count;


        var myIcon = L.icon({
            iconUrl: 'iconz/pur.png',
            iconSize: [30, 30],
        });

        L.marker([lat, lng],{icon: myIcon}).addTo(mymap).bindTooltip(ref);
        // L.marker([json[0][1][i].lat, json[0][1][i].lng]).addTo(mymap);

    }
});


var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
        div.innerHTML =
            '<i style="background: #ff0000"></i>- Active<br><br>- Today' +
            '<i style="background: #ffff00">';


    return div;
};
legend.addTo(mymap);


 
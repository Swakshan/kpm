const mymap = L.map('mapid').setView([12.506312, 80.159343], 16);


const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
const tUrl  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer( tUrl,{attribution} );
tiles.addTo(mymap);





var ref = database.ref('count');
var count;
ref.on('value', function(snapshot) {
    count = snapshot.val();
    var keys = Object.keys(count);
    var td = keys[(keys.length)-1];
    var yes = keys[(keys.length)-2];
    
    var tot =count[td].total;
    var act = count[td].act;
    var rec = count[td].rec;
    var dea = count[td].dea;
    
    var ytot = count[yes].total;
    var yrec = count[yes].rec;
    var ydea = count[yes].dea;
    
    var upd = count[td].up;

    $('#tot').text(tot);
    $('#rec').text(rec);
    $('#hos').text(act);
    $('#dea').text(dea);
    
    tcon = parseInt(tot)-parseInt(ytot);
    trec = parseInt(rec)-parseInt(yrec);
    tdea = parseInt(dea)-parseInt(ydea);
    
    $('#ttot').text(tcon);
    $('#trec').text(trec);
    $('#tdea').text(tdea);
    

    $('#timz').text(upd);
    
    $('#tot').counterUp({ delay: 10, time: 600 });
    $('#rec').counterUp({ delay: 10, time: 600 });
    $('#hos').counterUp({ delay: 10, time: 600 });
    $('#dea').counterUp({ delay: 10, time: 600 });

    $('#ttot').counterUp({ delay: 10, time: 600 });
    $('#trec').counterUp({ delay: 10, time: 600 });
    $('#tdea').counterUp({ delay: 10, time: 600 });


});

function ppp()
{
    var act = document.getElementById("act").value;
    var rec = document.getElementById("rec").value;
    var dea = document.getElementById("dea").value;
    var tt = parseInt(act)+parseInt(rec)+parseInt(dea);
    
    var data =
        {
            total:tt,
            act:act,
            rec:rec,
            dea:dea
        }
    ref.push(data);
  
    
      
    alert("done")
}

    

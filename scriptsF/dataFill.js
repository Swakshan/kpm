
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
    

    $('#timz').text(json.Count[len-1].date);

    var i;
    var area = "";
    
$('#tot').counterUp({ delay: 10, time: 600 });
    $('#rec').counterUp({ delay: 10, time: 600 });
    $('#hos').counterUp({ delay: 10, time: 600 });
    $('#dea').counterUp({ delay: 10, time: 600 });

    $('#ttot').counterUp({ delay: 10, time: 600 });
    $('#trec').counterUp({ delay: 10, time: 600 });
    $('#tdea').counterUp({ delay: 10, time: 600 });
    
})


function _(id){ return document.getElementById(id); }
function submitForm(){

    var formdata = new FormData();
    formdata.append( "n", _("nameid").value );
    formdata.append( "e", _("emailid").value );
    formdata.append( "m", _("msgid").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "scriptsF/feedbak.php" );
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success"){
                _("sts").innerHTML = '<h5>Thanks '+_("nameid").value+', your message has been sent.</h5>';
            } else {
                _("sts").innerHTML = "<h5>FAILED</h5>";//ajax.responseText;

            }
        }
    }
    ajax.send( formdata );
}
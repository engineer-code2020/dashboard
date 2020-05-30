var id="counter"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
    }
};
xhttp.open("POST", "http://localhost/scriptkma/terrific/addView/", true);
xhttp.onload=function(){

}
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("tableName="+id);
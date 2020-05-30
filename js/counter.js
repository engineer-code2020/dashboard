var idCode="counter"
var xhttpCoun = new XMLHttpRequest();
xhttpCoun.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
    }
};
xhttpCoun.open("POST", "https://breaktxt.000webhostapp.com/addView/", true);
xhttpCoun.onload=function(){

}
xhttpCoun.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttpCoun.send("tableName="+idCode);

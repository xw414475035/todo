function inputname(name){
    var name=prompt("请输入您的名字","")
    if(name){
        alert("Werlcome:" + name)
        document.getElementById("name").innerHTML = name;
    }else{
        alert("need a name")
    }
}

function addtodolist(){
    var obj_list ={
        todo: "", //save the todo list items
        done: false //easy for catagery items 
    };
    if (document.getElementById("add_list").length === 0){
        alert("Need input!");
        return;
    }
    obj_list.todo = document.getElementById("add_list").value;
    done.push(obj_list);
    saveData(done);

    document.getElementById("add_list").value = "";
    load();
}

function load(){
    var todo = document.getElementById("todo"),
    var done = document.getElementById("done"),
    var todocount = document.getElementById("todo").length,
    
}




function inputname(name){
    var name=prompt("请输入您的名字","")
    if(name){
        alert("Werlcome:" + name)
        document.getElementById("name").innerHTML = name;
    }else{
        alert("need a name")
    }
}

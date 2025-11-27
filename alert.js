function sayHi() {
    alert("Hello from JavaScript!");
}


function sayHi(){
    var name_full = "Dew" //ห้ามใช้ตัวแปรชื่อ name เพราะค่ามันไปชนกับ window.name จะทำให้ type มันเพี้ยนได้
    for (let i=0;i<2;i++){
        console.log("Hello"+name_full)
        alert("Hi"+(i+1)+name_full)
    }
    name_full = 900
    alert(typeof(name_full))
    name_full = name_full + 1
    console.log(name_full)
    console.log(typeof(name_full))
}

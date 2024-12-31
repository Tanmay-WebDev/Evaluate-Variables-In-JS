function clickMe(){
    const x = 7
    const y = 18
    const a = eval("x") + "<br>"
    const b = eval("2*x") + "<br>"
    const c = eval("y-x") + "<br>"

    const evaluate = a + b + c ;

    document.getElementById("output").innerHTML = evaluate;
}
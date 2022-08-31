

for (let i=0; i<7; i++){
    for (let j = 0; j<7; j++){
        if(j==0 || j== (6) || i ==j){
            document.write("X");
        } else {
            document.write(" &nbsp");
        }
    }

    document.write("<br/>")
}
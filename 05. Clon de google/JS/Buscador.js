function autocompletado () {
    document.getElementById("demo").innerHTML = '';

    var preguntas = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    var pal = document.getElementById("buscar-pal").value;
    var tam = pal.length;
    for(indice in preguntas){
        var nombre = preguntas[indice];
        var str = nombre.substring(0,tam);
        if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
            if(pal.toLowerCase() == str.toLowerCase()){
                var node = document.createElement("LI");
                var textnode = document.createTextNode(preguntas[indice]);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            } else {
  } 
        }
    }
}


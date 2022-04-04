function result()
{
    var students={
    PRANAV: {
        Maths:"100",
        Science:"100",
        Sanskrit:"100"
    },
    YASH:{
        Maths:"90",
        Science:"90",
        Sanskrit:"90"
    },
    SHREYAS: {
        Maths:"80",
        Science:"80",
        Sanskrit:"80"
    }
 }
 var studentName=document.getElementById('studentname').value;
 var input=studentName.toUpperCase();
 var defination=students[input];
 var output=document.getElementById("output");
 if(defination==undefined)
 {
     output.innerHTML=`<hr> There is no information about the student<hr>`;
 }
 else{
     output.innerHTML=`<hr> Math score is ${defination.Maths} <hr> Science score is ${defination.Science}<hr> Sanskrit score is ${defination.Sanskrit}<hr>`;
 }
}


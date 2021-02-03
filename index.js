var h,m,s,date;
function analog(){
    date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    hr=(30*h+(m/2));
    min=6*m;
    sec=6*s;
    document.getElementById("hr").style.transform=`rotate(`+hr+`deg)`;
    document.getElementById("min").style.transform=`rotate(`+min+`deg)`;
    document.getElementById("sec").style.transform=`rotate(`+sec+`deg)`;
    // if(h>=12 && h<=17){
        document.getElementById("t").innerHTML=h+" : "+m+" : "+s+"  ";
    // }
    // if(h>=17 && h<=20){
    //     document.getElementById("t").innerHTML=h+" : "+m+" : "+s+"  PM ";
    // }
    // if(h>=20 || h<=6){
    //     document.getElementById("t").innerHTML=h+" : "+m+" : "+s+"  AM ";
    // }
    // else{
    //     document.getElementById("t").innerHTML=h+" : "+m+" : "+s+"  AM ";
    // }

        
    
        
    
}
setInterval(analog);

    


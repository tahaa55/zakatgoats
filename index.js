function java(){
    let gots = document.getElementById('got').value;
    let zakatgoats;
    if(gots>=400){
         zakatgoats="4 gots";
         
    }
    else if(gots>=201){
         zakatgoats="3 gots";
    }
    else if(gots>=120){
        zakatgoats="2 got";
    }
    else if(gots>=40){
        zakatgoats="1 got";
    }
    else {
        zakatgoats="no zakat";
    }
     document.getElementById('zakat').innerHTML=zakatgoats;
}
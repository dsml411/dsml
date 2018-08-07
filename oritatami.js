function expand(URI,SUB,EXP){
  if(document.getElementById) {
    if(document.getElementById(SUB).style.display) {
      if(URI != 0) {
        document.getElementById(SUB).style.display = "block";
        document.getElementById(EXP).style.display = "none";
      } else {
        document.getElementById(SUB).style.display = "none";
        document.getElementById(EXP).style.display = "block";
      }
    } else {
      location.href = URI;
      return true;
    }
  } else {
    location.href = URI;
    return true;
  }
}

var id,id2,i ;		
function visible(n) {
	id='m'+n	
	for ( i = 0; i < 30; i++) {    //預設最多30個人，成員太多就把i<30的30增加吧
		id2='m'+i
		if (i==n) {
			document.getElementById(id).style.display='block' ;
		}
		else {
			document.getElementById(id2).style.display='none' ;
		}
	}
}

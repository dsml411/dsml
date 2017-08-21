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

var id,i ;		
function visible(n) {
	id=[document.getElementById('m0'),document.getElementById('m1'),document.getElementById('m2'),document.getElementById('m3'),document.getElementById('m4'),document.getElementById('m5'),document.getElementById('m6'),document.getElementById('m7'),document.getElementById('m8'),document.getElementById('m9')] ;
	for ( i = 0; i < id.length; i++) {
		if (i==n) {
			id[i].style.display='block' ;
		}
		else {
			id[i].style.display='none' ;
		}
	}
}

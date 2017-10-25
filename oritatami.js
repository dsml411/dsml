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
	id=[document.getElementById('m0'),document.getElementById('m2'),document.getElementById('m4'),
		document.getElementById('m6'),document.getElementById('m7'),document.getElementById('m8'),
		document.getElementById('m9'),document.getElementById('m10'),document.getElementById('m11'),
		document.getElementById('m12'),document.getElementById('m13'),document.getElementById('m14'),document.getElementById('m15')] ;
	for ( i = 0; i < id.length; i++) {
		if (id[i].id=='m'+n) {
			id[i].style.display='block' ;
		}
		else {
			id[i].style.display='none' ;
		}
	}
}

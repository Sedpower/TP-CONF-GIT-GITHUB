function grow(){
	function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
	var num = getRndInteger(70,100);
		document.getElementById('title').innerHTML = num + '/100';
		var num2 = document.getElementById('scuare');
		num2.style.width = num + '%';
		num2.style.borderRadius = '5px';	
}

document.getElementById('buton').addEventListener('click', grow);



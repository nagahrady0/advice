  	fetch("https://api.adviceslip.com/advice")
  	.then((result)=> result.json())
  	.then((mydata)=> {
  		document.getElementById('id-num').innerHTML = mydata.slip.id;
  		document.getElementById('advice-content').innerHTML = mydata.slip.advice;
  	});

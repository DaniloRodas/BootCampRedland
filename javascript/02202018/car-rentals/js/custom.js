var car1 = {
	make: 'Dodge',
	model: 'Challenger',
	year: 2014,
	mpg: 24,
	engine: 'v6'
};
var car2 = {
	make: 'Honda',
	model: 'Accord',
	year: 2016,
	mpg: 300,
	engine: 'v4'
};
var car3 = {
	make: 'GMC',
	model: 'Denali',
	year: 2018,
	mpg: 300,
	engine: 'v4'
};


function getDetails1() {
	var carName = car1.make + ' ' + car1.model;
	document.getElementById('car1MakeModel').innerHTML = carName;
	document.getElementById('car1Year').innerHTML = car1.year;
	document.getElementById('car1MPG').innerHTML = car1.mpg;
	document.getElementById('car1Engine').innerHTML = car1.engine;
}

function getDetails2() {
	document.getElementById('car2MakeModel').innerHTML = car2.make + ' ' + car2.model;
	document.getElementById('car2Year').innerHTML = car2.year;
	document.getElementById('car2MPG').innerHTML = car2.mpg;
	document.getElementById('car2Engine').innerHTML = car2.engine;
}

function getDetails3() {	
	document.getElementById('car3MakeModel').innerHTML = car3.make + ' ' + car3.model;
	document.getElementById('car3Year').innerHTML = car3.year;
	document.getElementById('car3MPG').innerHTML = car3.mpg;
	document.getElementById('car3Engine').innerHTML = car3.engine;
}

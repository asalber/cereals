// author: Alfredo Sánchez Alberca (asalber@ceu.es)
var dni;

function preprocess(){
	echo('library(cereals)\n');
}

function calculate () {
	dni = getString("dni");
	echo('data(cereals, package="cereals")\n');
	echo('set.seed(' + dni + 1 + ')\n');
	echo('cereals$calories <- cereals$calories + round(runif(length(cereals$calories),-2,2))\n');
	echo('cereals$protein <- cereals$protein + round(runif(length(cereals$protein),0,1),1)\n');
	echo('cereals$fat <- cereals$fat + round(runif(length(cereals$fat),0,1),1)\n');
	echo('cereals$sodium <- cereals$sodium + round(runif(length(cereals$sodium),0,5),1)\n');
	echo('cereals$fiber <- cereals$fiber + round(runif(length(cereals$fiber),0,1),1)\n');
	echo('cereals$carbohydrates <- cereals$carbohydrates + round(runif(length(cereals$carbohydrates),0,1),1)\n');
	echo('cereals$sugar <- cereals$sugar + round(runif(length(cereals$sugar),0,1),1)\n');
	echo('cereals$potassium <- cereals$potassium + round(runif(length(cereals$potassium),0,5),1)\n');
	echo('cereals$adults.assessment <- cereals$adults.assessment + round(rnorm(length(cereals$adults.assessment)),2)\n');
	echo('cereals$youths.assessment <- cereals$youths.assessment + round(rnorm(length(cereals$youths.assessment)),2)\n');
	echo('.GlobalEnv$cereals.' + dni + '<- cereals\n');
	echo('rm(cereals,envir=.GlobalEnv)\n');
}

function printout () {
	echo('rk.header ("Statistics homework data set", parameters=list("Data set name" = "cereals.' + dni + '"))\n');
	echo('rk.print("A new data set has been created in your workspace.")\n');
}


// author: Alfredo Sánchez Alberca (asalber@ceu.es)
var dni;

function preprocess(){
	echo('library(cereals)\n');
}

function calculate () {
	dni = getString("dni");
	echo('data(df.cereals, package="cereals")\n');
	echo('set.seed(' + dni + 1 + ')\n');
	echo('df.cereals$calories <- df.cereals$calories + round(runif(length(df.cereals$calories),-2,2))\n');
	echo('df.cereals$protein <- df.cereals$protein + round(runif(length(df.cereals$protein),0,1),1)\n');
	echo('df.cereals$fat <- df.cereals$fat + round(runif(length(df.cereals$fat),0,1),1)\n');
	echo('df.cereals$sodium <- df.cereals$sodium + round(runif(length(df.cereals$sodium),0,5),1)\n');
	echo('df.cereals$fiber <- df.cereals$fiber + round(runif(length(df.cereals$fiber),0,1),1)\n');
	echo('df.cereals$carbohydrates <- df.cereals$carbohydrates + round(runif(length(df.cereals$carbohydrates),0,1),1)\n');
	echo('df.cereals$sugar <- df.cereals$sugar + round(runif(length(df.cereals$sugar),0,1),1)\n');
	echo('df.cereals$potassium <- df.cereals$potassium + round(runif(length(df.cereals$potassium),0,5),1)\n');
	echo('df.cereals$adults.assessment <- df.cereals$adults.assessment + round(rnorm(length(df.cereals$adults.assessment)),2)\n');
	echo('df.cereals$youths.assessment <- df.cereals$youths.assessment + round(rnorm(length(df.cereals$youths.assessment)),2)\n');
	echo('.GlobalEnv$df.cereals.' + dni + '<- df.cereals\n');
	echo('rm(df.cereals,envir=.GlobalEnv)\n');
}

function printout () {
	echo('rk.header ("Statistics homework data set", parameters=list("Data set name" = "df.cereals.' + dni + '"))\n');
	echo('rk.print("A new data set has been created in your workspace.")\n');
}


include("Vector.js");

Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
};

// - - -

function print() {
	for (var i = 0; i < arguments.length; i++) {
   		post(arguments[i]);
  	}
	post();
}

// - - -

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// - - -

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

// - - -

function random(min, max) {
	if(typeof max != 'undefined') {
    return Math.random() * (max - min) + min;
	} else {
		return Math.random() * min;
	}
}

// - - -  

if (!Math.sign) {
    Math.sign = function(x) {
      return ((x > 0) - (x < 0)) || +x;
    }
}


var FF_Utils = 
{
	DegToRad: function(degrees)
	{
		return degrees * Math.PI / 180;
	},

	Print: function()
	{
		for (var i = 0; i < arguments.length; i++) {
			post(arguments[i]);
	   }
	 post();
	},

	Map: function(value, low1, high1, low2, high2) {
		return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
	},

	Clamp: function(num, min, max) {
		return Math.min(Math.max(num, min), max);
	},

	Random: function(min, maxVal) {
		if(typeof maxVal != 'undefined') {
		return Math.random() * (maxVal - min) + min;
		} else {
			return Math.random() * min;
		}
	},

	Sign: function(x)
	{
		return ((x > 0) - (x < 0)) || +x;
	},
	
	GetKeyByValue: function(object, value) {
		for (var prop in object) {
			if (object.hasOwnProperty(prop)) {
				if (object[prop] === value)
				return prop;
			}
		}
	},
	
	GetFileExtensionFromPath: function(path)
	{
		return path.split('.').pop();
	}, 

	GetFileNameFromPath: function(path)
	{
		return path.replace(/^.*[\\\/]/, '');
	}
}

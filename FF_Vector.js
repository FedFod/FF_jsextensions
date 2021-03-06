
// Vector class
function FF_Vector(x, y, z) {
	if (x instanceof Array)
	{	
		this.x = x[0];
		this.y = x[1];
		this.z = 0;
		if (x.length > 2)
		{
			this.z = x[2];
		}
	} 
	else if (x instanceof FF_Vector)
	{
		this.x = x.x;
		this.y = x.y;
		this.z = x.z;
	} 
	else
	{
		this.x = x || 0.0;
		this.y = y || 0.0;
		this.z = z || 0.0;
	}
};

FF_Vector.prototype = {

	add: function(v) {
		if (v instanceof FF_Vector) {
			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
		}
		else if (v instanceof Array)
		{
			this.x += v[0];
			this.y += v[1];
			if (v.length > 2)
			{
				this.z += v[2];
			}
		} 
		else {
			this.x += v;
			this.y += v;
			this.z += v;
		}
	},

	addNew: function(v) {
		var aX=this.x; var aY=this.y; var aZ=this.z;
		if (v instanceof FF_Vector) {
			aX += v.x;
			aY += v.y;
			aZ += v.z;
		}
		else if (v instanceof Array)
		{
			aX += v[0];
			aY += v[1];
			if (v.length > 2)
			{
				aZ += v[2];
			}
		} 
		else {
			aX += v;
			aY += v;
			aZ += v;
		}
		return new FF_Vector(aX, aY, aZ);
	},

	sub: function(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		this.z -= vector.z;
	},

	subNew: function(v) {
		var sX = this.x - v.x;
		var sY = this.y - v.y;
		var sZ = this.z - v.z;

		return new FF_Vector(sX, sY, sZ);
	},

	mult: function(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
	},

	multNew: function(scalar) {
		var mX = this.x * scalar;
		var mY = this.y * scalar;
		var mZ = this.z * scalar;

		return new FF_Vector(mX, mY, mZ);
	},

	div: function(scalar) {
		this.x /= scalar;
		this.y /= scalar;
		this.z /= scalar;
	},

	divNew: function(scalar) {
		var dX = this.x / scalar;
		var dY = this.y / scalar;
		var dZ = this.z / scalar;

		return new FF_Vector(dX, dY, dZ);
	},

	rotate: function(angle) {

		var temp = new FF_Vector(this.x, this.y);

		this.x = (temp.x * Math.cos(angle)) - (temp.y * Math.sin(angle));
		this.y = (temp.x * Math.sin(angle)) + (temp.y * Math.cos(angle));
	},

	length: function() {
		return Math.sqrt((this.x*this.x)+(this.y*this.y)+(this.z*this.z));
	},

	normalize: function() {
		var m = this.length();

		this.x = this.x/m;
		this.y = this.y/m;
		this.z = this.z/m;
	},

	isEqual: function(v) {
		return (this.x == v.x && this.y == v.y && this.z == v.z);
	},

	distance: function(v) {
		return Math.sqrt((v.x-this.x)*(v.x-this.x) + (v.y-this.y)*(v.y-this.y) + (v.z-this.z)*(v.z-this.z));
	},

	distanceSqrd: function(v) {
		return (v.x-this.x)*(v.x-this.x) + (v.y-this.y)*(v.y-this.y) + (v.z-this.z)*(v.z-this.z);
	},

	get: function() {
		return new FF_Vector(this.x, this.y, this.z);
	},

	set : function(x, y, z){
      	if (x instanceof FF_Vector) { 
			  this.set(x.x, x.y, x.z); 
		}
		else if (x instanceof Array) {  
			if (x.length > 2)
			{
				this.set(x[0], x[1], x[2]); 
			}
			else
			{
				this.set(x[0], x[1]);
			}
		}

		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
  },

	crossNew: function(v) {
		return new FF_Vector(this.y*v.z - this.z*v.y, this.z*v.x - this.x*v.z, this.x*v.y - this.y*v.x);
		//cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1 * b2 - a2 * b1 ]
	},

	dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},

	clamp: function(min, max) {
		this.x = Math.min(Math.max(this.x, min), max);
		this.y = Math.min(Math.max(this.y, min), max);
		this.z = Math.min(Math.max(this.z, min), max);
	},

	toArray: function() {
		return [this.x, this.y, this.z];
	},

	getCopy: function() {
		return new FF_Vector(this.x, this.y, this.z);
	}
};

// - - -

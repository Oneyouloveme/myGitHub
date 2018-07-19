function foo(){
	alert(this.a)
}

var obj = {
	a : 6,

}

foo.apply(obj);
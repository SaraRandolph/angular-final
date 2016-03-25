app.constant('CONSTANTS', (function(){ 
	var root = 'https://sara-angular-project.firebaseio.com/';


    var gallery = root + 'gallery/'
	var calculator = root + 'calculator/' 
    
    return {
		fbRef: root,
        gallery: gallery,
        calculator: calculator,
    }
    
}()));
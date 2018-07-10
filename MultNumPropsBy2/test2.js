describe("multiplyNumeric()", function() {
	it("Multiply all number properties by 2", function(){
		
		    let menu = {
			  width: 200,
			  height: 300,
			  title: "My menu"
				};
		let result = multiplyNumeric(menu);
		assert.equal(menu.width, 400);
		assert.equal(menu.height, 600);
		assert.equal(menu.title,"My menu");
	});
	
	it("returns nothings", function() {
		assert.isUndefined( multiplyNumeric ({}) );
	});
});
	

'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));


    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
  
    describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create a name of World', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope:scope});
      expect(scope.name).toBe('World');
    }));

  });
});

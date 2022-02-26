/*global QUnit*/

sap.ui.define([
	"ajaxtest/controller/ajax.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ajax Controller");

	QUnit.test("I should test the ajax controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

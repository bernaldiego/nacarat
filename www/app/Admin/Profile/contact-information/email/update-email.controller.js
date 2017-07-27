(function() {
  'use strict';

  angular
    .module('Admin.Profile')
    .controller('UpdateEmailController', UpdateEmailController);

  UpdateEmailController.$inject = [
    'locals',
    '$dialogHelper'
  ];

  function UpdateEmailController(locals, $dialogHelper) {
    var dialogProperties = locals.locals.dialogProperties;
    var vm = this;
    vm.content = dialogProperties.dialogContent.contentHTML;
    vm.contentPath = dialogProperties.dialogContent.contentTemplateUrl;

    vm.title = dialogProperties.title;
    vm.submitText = dialogProperties.submitText;
    vm.cancelText = dialogProperties.cancelText;
    vm.model = locals.locals.model;
    vm.flexGtMd = "33";
    vm.flexMd = "33";
    console.log(vm.model);

    vm.form = {};
    vm.submit = submit;
    vm.cancel = cancel;

    //var originalForm = angular.copy(vm.model);

    function submit() {
      if (vm.form.$valid) {
        console.log("SUBMIT");
      }
    }

    function cancel() {
      $dialogHelper.hide();
    }
  }
})();

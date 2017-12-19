// TODO: show toast when action succeeds or fails
// TODO: Check that the form has changed before submitting
// TODO: Add validation
export default function UpdateBusinessNameController(locals, BusinessesService, $dialogHelper, $toastHelper, $state, $stateParams) {
    var dialogProperties = locals.locals.dialogProperties;
    var vm = this;
    vm.content = dialogProperties.dialogContent.contentHTML;
    vm.contentPath = dialogProperties.dialogContent.contentTemplateUrl;

    vm.title = dialogProperties.title;
    vm.submitText = dialogProperties.submitText;
    vm.cancelText = dialogProperties.cancelText;
    vm.businessName = locals.locals.model.businessName;
    vm.model = locals.locals.model;
    vm.flexGtMd = "33";
    vm.flexMd = "33";

    vm.form = {};
    vm.submit = submit;
    vm.cancel = cancel;

    //var originalForm = angular.copy(vm.model);

    function submit() {
        if (vm.form.$valid) {
            BusinessesService.profile.updateName(vm.model.businessId, vm.businessName).then(
                function(response) {
                    $state.reload();
                    $toastHelper.showSuccess("Business name has been updated sucessfully");
                },
                function error(err) {
                    $toastHelper.showError("Error has occurred. Please try again");
                    $state.reload();
                }
            );
        }
    }

    function cancel() {
        $dialogHelper.hide();
    }
}

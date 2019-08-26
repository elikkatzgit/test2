$.getJSON("https://azurecards.blob.core.windows.net/site/azurecards101.json",
    function(data) {
        var viewModel = {
            categories: ko.observableArray(data)
        };
        ko.applyBindings(viewModel);
    });

popoverTemplate = ko.observable('popover_content_wrapper');
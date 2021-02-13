angular.module('firstApp').component('contentHeader', {
    bindings: {
        name: '@',
        version: '@'
    },
    template: `
        <section class="content-header">
            <h1>{{ $ctrl.name }} <small>{{ $ctrl.version }}</small></h1>
        </section>
    `
});
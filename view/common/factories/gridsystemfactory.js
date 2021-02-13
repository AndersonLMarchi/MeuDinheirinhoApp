angular.module('firstApp').factory('gridSystem', [ function() {

    function toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [];
        let classes = '';

        if (cols[0]) classe += `col-xs-${cols[0]} `;
        if (cols[1]) classe += `col-sm-${cols[1]} `;
        if (cols[2]) classe += `col-md-${cols[2]} `;
        if (cols[3]) classe += `col-lg-${cols[3]} `;

        return classes;
    }

    return { toCssClasses };

}]);
/* Javascript Vanilla removeClass JS method without using Jquery .removeClass method */

var removeClass = function(array, className) {
    var i = 0,
        len = array.length;
    for (; i < len; i++) {

        if (array[i].classList) {
            array[i].classList.remove(className);
        } else {
            var names = array[i].className.split(' '),
                j = 0,
                sublen = names.length;

            for (; j < sublen; j++) {
                if (names[j] === className) {
                    names[j] = "";
                }
            }
            array[i].className = names.join('');
        }
    }
};

/* Javascript Vanilla addClass JS method without using Jquery .addClass method */

var addClass = function(array, className) {
    var i = 0,
        len = array.length;
    for (; i < len; i++) {
        if (array[i].classList) {
            if (array[i].classList.contains(className)) {
                array[i].classList.add(className);
            }
        } else {
            var names = array[i].className.split(' '),
                j = 0,
                sublen = names.length;

            for (; j < sublen; j++) {
                if (names[j] === className) {
                    names[j] = "";
                }
            }

            names.push(' ');
            names.push(className);
            array[i].className = names.join('');
        }
    }
};

/* Javascript Vanilla data.setdata JS method without using Jquery .data method */

window.data = {
    setdata: function(obj, key, val) {
        if(!obj) {
            return this._data;
        } else if(!key) {
            if(!(obj in this._data)) {
                return {};
            }
            return this._data[obj];
        } else if(arguments.length < 3) {
            if(!(obj in this._data)) {
                return undefined;
            }
            return this._data[obj][key];
        } else {
            if(!(obj in this._data)) {
                this._data[obj] = {};
            }
            this._data[obj][key] = val;
        }
    },
    _data: {}
};
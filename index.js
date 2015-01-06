'use strict';

/**
 * Dependencies.
 */

var doubleMetaphone = require('wooorm/double-metaphone@0.1.4');

/**
 * DOM elements.
 */

var $input = document.getElementsByTagName('input')[0];
var $output = document.getElementsByTagName('output')[0];

/**
 * Event handlers.
 */

function oninputchange() {
    var value = doubleMetaphone($input.value);

    if (value[0].length === 0 && value[1].length === 0) {
        $output.textContent = '';

        return;
    }

    $output.textContent = '["' + value[0] + '", "' + value[1] + '"]';
}

/**
 * Listen.
 */

$input.addEventListener('input', oninputchange);

/**
 * Initial answer.
 */

oninputchange();

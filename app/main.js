/**
 * Created by Administrator on 2015/11/25.
 */
/*
'use strict';

var component = require('./component.js');

document.body.appendChild(component());*/

import React from './react.js';
import Hello from './component.jsx';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}

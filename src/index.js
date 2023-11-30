'use strict';
require('./index.scss');
var layout = require('layouts/page/base.js');
var Vue = require('vue');	

new Vue({
    mixins: [layout.mixin]
}).$mount('#main-section');



/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxFlexbox=e():t.vuxFlexbox=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},function(t,e){},function(t,e){t.exports="<div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div>"},function(t,e,o){var r,n;o(2),r=o(1),n=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});
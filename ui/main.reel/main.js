/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleTextAction: {
        value: function (event) {
            console.log("NOOOO");
        }
    },

    handleTextClick: {
        value: function (event) {
            console.log("Click!!!");
        }
    }

});

/**
 * @module ui/event.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Event
 * @extends Component
 */
exports.Event = Component.specialize(/** @lends Event# */ {
    constructor: {
        value: function Event() {
            this.super();
        }
    }
});

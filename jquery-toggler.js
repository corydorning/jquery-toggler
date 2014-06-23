/*! jquery-toggler-1.1.js
 *
 * Authored by: Cory Dorning & Brett Metzger
 * Website: http://corydorning.com/projects/jquery-toggler
 * Source: https://github.com/corydorning/jquery-toggler
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 11/04/2013
 *
 * Toggler allows you to toggle the display of content
 *
 */

// include semicolon to make sure any JS before this plugin is terminated
;(function($) {
  // ECMAScript 5 strict mode
  "use strict";

  $.fn.toggler = function(options) {

    // set any defaults
    var defaults = {
        callback: function(){},
        duration: 400,
        event: 'click',  // sets the default event type to click
        slide: true,
        target: null  // sets the default target to null, must be set at init
      },

      // original jQuery object
      $sel = this,

      dataOptions = {
        callback: $sel.data('callback') ? window[$sel.data('callback')] || $.ddui.helpers.stringToMethod($sel.data('callback')) : function(){},
        duration: $sel.data('duration'),
        event: $sel.data('event'),  // sets the default event type to click
        slide: $sel.data('slide'),
        target: $sel.data('target') || $sel.attr('href')  // sets the default target to null, must be set at init
      },

    // overwrite 'defaults' with those passed via 'options'
      settings = $.extend(defaults, options, dataOptions);


    // loop through each instance and maintain chainability
    return $sel.each(function() {
      // current, single instance of $sel
      var $this = $(this);

      // create event handler for each $this
      $this.on(settings.event, function(e) {
        $(settings.target)[settings.slide ? 'slideToggle' : 'toggle'] (settings.duration, settings.callback);

        e.preventDefault();
      });

    });

  };
})(jQuery);
// end toggler
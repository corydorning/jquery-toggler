/*! jquery-toggler.js
 *
 * Authored by: Cory Dorning & Brett Metzger
 * Website: http://corydorning.com/projects/jquery-toggler
 * Source: https://github.com/corydorning/jquery-toggler
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 10/02/2014
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
        target: null,  // sets the default target to null, must be set at init
        toggleClass:  null // sets classes you want to toggle on the trigger
      },

    // original jQuery object
      $sel = this,

    // overwrite 'defaults' with those passed via 'options'
      settings = $.extend(defaults, options);


    // loop through each instance and maintain chainability
    return $sel.each(function() {
      // current, single instance of $sel
      var $this = $(this),
        dataOptions = {
          callback: $this.data('callback') ? window[$this.data('callback')] || $.ddui.helpers.stringToMethod($this.data('callback')) : settings.callback,
          duration: $this.data('duration') || settings.duration,
          event: $this.data('event') ||settings.event,  // sets the default event type to click
          slide: $this.data('slide') || settings.slide,
          target: $this.data('target') || $this.attr('href') || settings.target,  // sets the default target to null, must be set at init
          toggleClass: $this.data('toggle-class') || settings.toggleClass  // sets classes you want to toggle on the trigger
        }
        ;

      // create event handler for each $this
      $this.off(dataOptions.event).on(dataOptions.event, function(e) {
        var classToggle = dataOptions.toggleClass;

        if (classToggle) {
          $(this).toggleClass(classToggle);
        }

        $(dataOptions.target)[dataOptions.slide ? 'slideToggle' : 'toggle'] (dataOptions.duration, dataOptions.callback);

        e.preventDefault();
      });

    });

  };
})(jQuery);
// end toggler
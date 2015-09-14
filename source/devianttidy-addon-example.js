// ==UserScript==
// @name         DeviantTidy Addon Example
// @namespace    devianttidytest
// @description  Test addon for DeviantTidy
// @version      1.0.1
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFY3HCoAAAAHdFJOUwCZo3dSLcKUGtMdAAABDElEQVRIx82UPQvCQBBELyanrQmIrUbFNmhhKyLYBkVsrUzrt3/fI6PJKS6DFxBfu8Pdy2YSpT7RuOXslcQCgY4YyBBIpbmP+UE8gCpMEEjEAOY3RRRO7gptoqCZgof5WQxsENgyhSlRuIoH1CorDKsq1BG4uCuwtgWYH90VKhc+YIWnCo/CN1nh0y8LH+yeZEXhV2OQWmYlpvCjOKdrL6fEvPRumDOwzQqMgo9AlFhmJUZhiQOi1PoUXxUQ6NnLKbgyhTNT2DKF6ZtCmyjoDwoe1hjnCnr+hrlBr4H6Ox4NEecaT9aT/79YTksMYP2R+GN5rl9WwA19ptB0VwiJQsAUvJAozH6lkLgo3AEb5uB/u0ZRNAAAAABJRU5ErkJggg==
// @match        *://*.deviantart.com/*
// @grant        unsafeWindow
// ==/UserScript==

// These add-ons must run AFTER DeviantTidy has loaded, so it's important to install the Greasemonkey 
// scripts after installing DeviantTidy.
// You can also change the script execution order from the Manage User Scripts window.

// Unpack DeviantTidy functions and objects, so you can use them in your own script.
// There are more utilities available than those listed here.  Add them yourself if you need them.
try {
	const devianttidy = unsafeWindow.devianttidy;
	const devianttidyutils = unsafeWindow.devianttidyutils;
	const devianttidydialog = devianttidyutils.devianttidydialog;
	const $ = devianttidyutils.$;
} catch(e) {
	GM_log("DeviantTidy not loaded: "+e.message);
}


devianttidy.extend({
	name: 'my_test', // Unique name, used internally (required)

	// Text that represents this function in the options panel (required)
	description: "My Test Add-On",

	// Extra information about the option - appears under the control in the options panel.
	hint: "This is a test",

	// The default preference for this function if not previously set by the user
	// If you don't supply this, the default is 1.
	initial: 1,

	// If you give a simple array of choices, each choice will be an item in a drop-down list.
	// The value of 'pref' will then be the index of the selected item.
	// If not specified, the control will be a checkbox, and 'pref' can be either 0 or 1.
	//choices: ['a', 'b', 'c'],

	// If the option is lazy, then setting the pref to 0 means function does not execute.
	// Useful for boolean options.
	lazy: true,

	// The function that will execute (required)
	// It's recommended that you return a value for debugging purposes.
	// Return some negative value to indicate failure, 0 for neutral, and positives for success.
	// For instance, you could return the number of elements processed by the function.
	method: function(pref) {
		devianttidydialog.open("Test Dialog", "Testing... The preference setting for this function is set to " + pref + ".");
		return 1;
	}
});

/*
    Handlebars CopyrightYear Helper
    ----

    Usage: {{copyrightYear}}


    Name of the file define your block name
   	// Example file src/helpers/bold.js
	module.exports = function(options) {
  	// options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  		var bolder = '<strong>' + options.fn(this) + '</strong>';
  		return bolder;
	}
* ==================================================== */

module.exports = function(options) {
  var start =  '2016'
  var curYear = new Date().getFullYear().toString();
  var copyRightsString = curYear === start ? start : `${start} - ${curYear}`

  return copyRightsString;
}
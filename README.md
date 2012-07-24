Remize
======
Add rem units to every CSS properties which has applied px units.

How to use
----------
The remize library exports a single function `Remize`. It accepts css code as
first argument and return css code which applies rem units.

    var Remize = require('./remize');
    var remizedCssCode = Remize("#test{padding:12px 10% 5px 3px}");
    console.log(remizedCssCode); // #test{padding:12px 10% 5px 3px;padding:1.2rem 10% 0.5rem 0.3rem}

Before use, insert following `font-size` property to html element. See [Font
sizing with rem](http://snook.ca/archives/html_and_css/font-size-with-rem) for
more info of this.

    html { font-size: 62.5%; }

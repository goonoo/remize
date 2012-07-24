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

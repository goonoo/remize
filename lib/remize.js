/*
Copyright (c) 2012 Goonoo Kim <mctenshi@gmail.com>

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function Remize(code) {
  var blankStr = '[\\s\\r\\t]*',
      expPropertyHasPx = new RegExp("([;{])"+ blankStr +
          "([a-z\-]+"+ blankStr +":)([^;^}]+)", "ig"),
      remized = code;

  while (res = expPropertyHasPx.exec(code)) {
    remized = remized.replace(
      res[0],
      res[0] +';'+ res[2] + res[3].replace(/([0-9]+)px/g,
          function(v){return parseInt(v)/10 + 'rem'})
    );
  };

  return remized;
};

// Hook into commonJS module systems
if (typeof module !== 'undefined' && "exports" in module) {
  module.exports = Remize;
};

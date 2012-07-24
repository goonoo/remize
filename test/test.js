var remize = require('./remize.js');
var assert = require('assert');

assert.equal(
  remize('#test{font-size:12px}'),
  '#test{font-size:12px;font-size:1.2rem}'
);
assert.equal(
  remize('#test{padding:12px 10% 5px 3px}'),
  '#test{padding:12px 10% 5px 3px;padding:1.2rem 10% 0.5rem 0.3rem}'
);
assert.equal(
  remize('#test{font:bold 12px/1.2 serif;padding:12px 10% 5px 3px}'),
  '#test{font:bold 12px/1.2 serif;font:bold 1.2rem/1.2 serif;padding:12px 10% 5px 3px;padding:1.2rem 10% 0.5rem 0.3rem}'
);

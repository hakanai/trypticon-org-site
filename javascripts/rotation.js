
var taglines = [
  'Capitalism, ho!',
  'Yayification!',
  'Strudel.',
  'If it ain\'t broke, try to fix it anyway.',
  'I\'m not sure what to put here.',
  'This header is sponsored by an anonymous corporation.',
  'Insert ironic tagline here.',
  'Pie is good.',
  'Witches exist.',
  'Witches don\'t exist!'
];

Event.observe(window, 'load', function() {
  $('site-subtitle').innerHTML = taglines[Math.floor(Math.random() * taglines.length)];
});



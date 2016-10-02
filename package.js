/* global Package */

Package.describe({
  name: "antoniopresto:collection2-core",
  summary: "Core package for aldeed:collection2",
  version: "1.2.0",
  git: "https://github.com/smartdemocracy/meteor-collection2-core.git"
});

Package.onUse(function(api) {
  api.use('antoniopresto:simple-schema');
  api.imply('antoniopresto:simple-schema');

  api.use('underscore@1.0.0');
  api.use('check@1.0.0');
  api.use('mongo@1.0.4');
  api.imply('mongo');
  api.use('minimongo@1.0.0');
  api.use('ejson@1.0.0');
  api.use('raix:eventemitter@0.1.3');

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.0', {weak: true});

  api.addFiles([
    'lib/collection2.js',
  ]);

  api.export('Collection2');
});

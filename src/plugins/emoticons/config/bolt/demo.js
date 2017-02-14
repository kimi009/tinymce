configure({
  configs: [
    './../../../../core/config/bolt/demo.js'
  ],
  sources: [
    source('amd', 'tinymce.plugins.emoticons.demo', '../../src/demo/js', function (id) {
      return mapper.hierarchical(id).replace(/^tinymce\/plugins\/emoticons\//, '');
    }),
    source('amd', 'tinymce.plugins.emoticons', '../../src/main/js', function (id) {
      return mapper.hierarchical(id).replace(/^tinymce\/plugins\/emoticons\//, '');
    }),
    source('amd', 'tinymce.plugins', '../../../../plugins', function (id) {
      var parts = id.split('.');
      return parts.slice(2, 3).concat(['src/main/js']).concat(parts.slice(3)).join('/');
    }),
    source('amd', 'tinymce.themes', '../../../../themes', function (id) {
      var parts = id.split('.');
      return parts.slice(2, 3).concat(['src/main/js']).concat(parts.slice(3)).join('/');
    })
  ]
});


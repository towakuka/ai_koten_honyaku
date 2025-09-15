module.exports = {
  title: '国富論', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'アダム・スミス', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  size: 'A5', // paper size.
  // theme: './themes/node_modules/@vivliostyle/theme-bunko/theme.css', // .css or local dir or npm package. default to undefined.
  theme: '@vivliostyle/theme-bunko', // .css or local dir or npm package. default to undefined.
  entry: [
    // {
    //   // Use preview-specific TOC so relative paths work in preview/build
    //   path: '../toc-preview.html',
    //   output: 'index.html',
    //   rel: 'contents'
    // },
    'ch11_11.md',
    // 'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: {
  //   htmlPath: '../toc-tempalte.html',
  //   title: '目　　次',
  //   sectionDepth: 3,
  // }, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}

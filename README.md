# CSS and JavaScript minifier plugin for [Hexo]

This plugin provides a command to minify all the CSS and JavaScript files.

Note: file must end with `.css` or `.js` and no `.min.` in filename.

## Usage

### Install

```
npm install hexo-minifer --save
```

### Update

```
npm update
```

### Uninstall

```
npm uninstall hexo-minifer
```

### Usage

```
hexo generate
hexo minify
```

Due to the [issue #82](https://github.com/tommy351/hexo/issues/82), you must run `hexo generate` manually before minifing files.

### About HTML minifier

For now, there's no suitable HTML minifier for Hexo, I recommend to use templating engine that outputs minified HTML file, e.g. [Jade](http://jade-lang.com/), read more on Hexo [wiki](https://github.com/tommy351/hexo/wiki/Plugins).

[Hexo]: http://zespia.tw/hexo

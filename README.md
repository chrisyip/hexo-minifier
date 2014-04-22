# This project's discontinued!

# CSS and JavaScript minifier plugin for [Hexo]

This plugin allows you to minify all the CSS and JavaScript files.

Note: files must end with `.css` or `.js` and files with `.min.` will be ignored.

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
hexo minify [-g|-generate]
```

With the argument: `-g` or `-generate`, or `public` folder isnot exist, minifier will generate files before minification.

### About HTML minifier

For now, there's no suitable HTML minifier for Hexo, I recommend to use templating engine that outputs minified HTML file, e.g. [Jade](http://jade-lang.com/), read more on Hexo [wiki](https://github.com/tommy351/hexo/wiki/Plugins).

[Hexo]: http://zespia.tw/hexo

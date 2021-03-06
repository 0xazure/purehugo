purehugo
========

A heavily-modified fork of [dplesca/purehugo](https://github.com/dplesca/purehugo) that removes some unused features and cleans up the styling to work better with Hugo's built-in code syntax highlighting.

This Hugo theme is based on [purecss](http://purecss.io/) from Yahoo, specifically [the purecss blog layout example](http://purecss.io/layouts/blog/). It is responsive and has a few more features: pagination (if enabled), responsive images (through a shortcode), and google analytics.

### Installation

Navigate to your Hugo site's theme folder
```
$ cd themes
$ git clone https://github.com/dplesca/purehugo.git
```

### Config file

The config file for the demo site looks like this:

```toml
baseurl = "http://dplesca.github.io/purehugo/"
languageCode = "en-us"
title = "purehugo"
theme = "purehugo"
Paginate = 10

[params]
  twitterName = "dragos_plesca"
  githubName = "dplesca"
  stackOverflowId = "#######"
  linkedinName = "dragos-plesca-52797444"
  description = "Demo site for a hugo theme"
  google_analytics = "UA-xxxxxx-xx"
```

Notice the configuration necessary for the twitter, github, stack overflow and linkedin handlers (for the site sidebar); the site description and enabling Google Analytics reporting.

### Responsive Images

For responsive images you could use the built-in responsive image shortcode (without the `/**/` characters):  
```
{{%/* img-responsive "http://example.com/image.jpg" */%}}
```

### Hide Sidebar icons text Options

If you would like to hide the text next to the icons on the sidebar, you can add this option in the `params` section of your config file.

```toml
[params]
  # ... other options ...
  hideSidebarIconText = true
```

### Screenshot
![Screenshot](https://i.imgur.com/Dsj41Rz.png)

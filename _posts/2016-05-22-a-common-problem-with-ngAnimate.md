---
layout: post
title:  "A common problem with ngAnimate"
date:   2016-05-20 22:43:19 +0200
permalink: /blog/a-common-problem-with-nganimate
---

A common problem I encounter often when developing apps in Angular and using ngAnimate, is the additional classes that will be added to anything used with ```ng-show```, ```ng-hide```, ```ng-class``` and css transitions.

This usually creates an unwanted behavior with double animations. Stuff not behaving as intended. There is a couple of ways to solve this:

### Add a directive that disables all ngAnimations
Lately I had a problem where ngAnimate added classes to a multi-level menu, where I used css transitions to go back and forward in the menu. This resulted in choppy behaviour and the menu not looking 100% responsive to user actions.

It took a while before I realised what was causing the issue. Doing as the snippet below will disable animation on the element the directive is added to and all its children.
This can also be done on any other directive. Just inject $animate and add ```$animate.enabled(el, false)``` to the link-function.

{% highlight javascript %}
angular
    .module('myApp')
    .directive('noAnimationPlz', function($animate) {
        return {
            restrict: 'AE',
            link: link
        }

        function link(scope, el) {
            $animate.enabled(el, false);
        }
    });
}
{% endhighlight %}

### Disable ngAnimations for the whole application
This might sound crazy. Why would you want to disable the animations for the whole application? Why just don't use it?

Well, we want to use the magic of ngAnimate but ONLY on specific elements. To solve this there is a config we can use that will give us full control of on what elements ngAnimate will add classes.

{% highlight javascript %}
angular
    .module('myApp')
    .config(function($animateProvider) {
        $animateProvider.classNameFilter(/ng-animate/);
    });
}
{% endhighlight %}

This means ngAnimates will only add classes to elements with this class, and leave all other elements alone.
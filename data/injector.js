//Script Modified from http://stackoverflow.com/a/9517879 | Original Author: Rob W
var s = document.createElement("script");
s.type = "text\/javascript";
s.src = self.options.scriptURL;
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

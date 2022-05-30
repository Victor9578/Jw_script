// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/search?q=document%E7%82%B9%E5%87%BB%E4%B8%80%E4%B8%AA%E6%A0%87%E7%AD%BE&newwindow=1&sxsrf=AOaemvK3TpsavRUDZOTP1Gp31x7u_huOVg%3A1638955704424&ei=uHqwYbyiGeDn2roPg92u-AI&ved=0ahUKEwi83sHk8dP0AhXgs1YBHYOuCy8Q4dUDCA4&uact=5&oq=document%E7%82%B9%E5%87%BB%E4%B8%80%E4%B8%AA%E6%A0%87%E7%AD%BE&gs_lcp=Cgdnd3Mtd2l6EAM6BgizARCFBDoFCAAQkQI6BAgAEEM6DgguELEDEIMBEMcBEK8BOgUILhCABDoICAAQgAQQsQM6DgguEIAEELEDEMcBEKMCOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6CAguELEDEIMBOgsILhCxAxDHARCjAjoHCAAQsQMQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6BQgAEIAESgQIQRgAUABYk3Vg6XloBHACeAOAAc4LiAG7TZIBEDAuMTkuMS4xLjAuMi4xLjOYAQCgAQGwAQHAAQE&sclient=gws-wiz
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// 知网html阅读 导出文献的引用
  lab = []
  lab1 = []
  labs = ''
  for (const m of document.getElementById('a_bibliography').children) {
    lab1.push(m)
  }

  for (const [key,values] of lab1.entries()) {
    if (key == 0) {
      continue
    } else {
    lab[key-1] = values.childNodes[1].childNodes[2].wholeText;
    }
  }

  labs = ''
  for (const key in lab) {
    labs += lab[key].split(' ').join('').replace('\n','')
  }

  console.log(labs)


})();



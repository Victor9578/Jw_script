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
    // 查询页面当前课程总数


    document.getElementsByClassName('ui-pg-selbox')[0].selectedIndex = 5
    $('.ui-pg-selbox').change()
    setTimeout(() => {
        let lb =document.getElementsByClassName('ui-widget-content jqgrow ui-row-ltr')
        console.log(lb.length+1)
        for (let i = 1; i <lb.length+1; i++) {
            setTimeout(() => {
                document.getElementById(i).click()
            }, i*10000);
            setTimeout(() => {
                document.getElementsByClassName('form-control')[0].value = '96A44CDDD19A0651E053DCB84A3BFE10'
                for (let m = 1; m < 11; m++) {
                    document.getElementsByClassName('form-control')[m].value = parseInt(Math.random()*10+80)
                }
                document.getElementsByClassName('btn btn-default btn-default')[2].click()
                document.getElementsByClassName('bootbox-close-button btn-sm close bootbox-close')[0].click()
                console.log(i)
            }, i*10000+5500);
        
        }
    }, 5000);

})();



/*
Very proud of myself for this one. 

First time using objects to hold data while manipulating DOM (will figure out JSON subsequently). Plus i didn't sweat on any solution (both CSS and JavaScript). Insight revealed itself quickly.

Me displaying very competent learning thus far, and the potential to continually outdo myself evidently there.
*/

(function(){
    let daily = document.querySelector(".daily");
    let weekly = document.querySelector(".weekly");
    let monthly = document.querySelector(".monthly");
    let article = document.querySelectorAll("article");

    daily.addEventListener('click', function(){
        for (var i=0; i<article.length; i++){
            let cur = array[i].daily.current;
            let pre = array[i].daily.previous;
            article[i].querySelector("b").textContent = `${cur}hrs`;
            article[i].querySelector("i").textContent = `Yesterday - ${pre}hrs`;
        }
    })

    weekly.addEventListener('click', function(){
        for (var i=0; i<article.length; i++){
            let cur = array[i].weekly.current;
            let pre = array[i].weekly.previous;
            article[i].querySelector("b").textContent = `${cur}hrs`;
            article[i].querySelector("i").textContent = `Last Week - ${pre}hrs`;
        }
    })

    monthly.addEventListener('click', function(){
        for (var i=0; i<article.length; i++){
            let cur = array[i].monthly.current;
            let pre = array[i].monthly.previous;
            article[i].querySelector("b").textContent = `${cur}hrs`;
            article[i].querySelector("i").textContent = `Last Month - ${pre}hrs`;
        }
    })
    
const array = [
    {
       daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    ,
    {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    ,
    {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    ,
    {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    ,
    {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    ,
    {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
      ]

    })();
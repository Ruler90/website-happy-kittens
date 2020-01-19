
#######################

### v1.3.4 - 16.01.2020, 17.01.2020, 18.01.2020

1. Simplified desktop and mobile menu code (there was some repeated code). Now there is just one different div instead of one different and 2 identical.

2. Changed navigation.js code to grab just one nav instead of using for loop on two navs.

3. Added hamburger menu for mobile:

    - Used invisible checkbox, one span with html code for hamburger (trigram for heaven) and another span with html code for X symbol. When menu is clicked, the checkbox becomes checked/unchecked and we see hamburger or X (+ animation).

    - When invisible checkbox gets focus, hamburger or X symbol gets outline (good for accessibility, but imo it's not that cool when it stays visible after each click).

    - Used JS eventListener to check on each click if invisible checkbox is checked. Then .showMenu class is added to or removed from menu and .navFixedPosition class is added to or removed from nav (it prevents from unexpected menu behavior when scrolling with menu opened).

    - Added animation (scale and translate) that looks like menu is poping up from a button.

4. Translated dev changelog to english and updated readme.md.

#######################

### v1.3.3 - 14.01.2020, 15.01.2020, 16.01.2020

- Code refactoring:

    - Combined few old css files into one scss file.

    - Simplified css classes and some html elements.

    - Changed newsletter div to form element.

    - Added different colors to social icons on hover and focus.

    - Adjusted Media Queries for better look on mobile.

    - Adjusted icon sizes.

    - Added smaller logo for mobile.

    - Removed JS slide-in effect from reviews section.

    - Added justify-content: space-around just for Microsoft Edge (space-evenly isn't working).

    - Removed every instance of .flexWrapSpaceEvenly class and added different classes instead. Now only h1, h2 and section divider elements share styling.

#######################

### v1.3.2 - 30.09.2019

- Added new (shorter) JS code for slides. Now it isn't based on .hidden class and adding display: none to all invisible slides. Now visible slide gets .activeSlide class and animations are added to previous/next element (depends on which element will become visible next).

#######################

### v1.3.1 - 18.09.2019

- Changed animations from absolute left/right to transform: translateX.

#######################

### v1.3.0 - 29.08.2019

- Added sticky menu - on page load nav has position: sticky and top property with minus value. If we scroll page down and then up, eventListener will run function that will add .showNav class to nav. This class is changing top value and we see animation of menu sliding in from top. If we scroll down, .showNav class is removed and menu will be hidden. 

- Added minified version of Lodash library that contains just debounce and throttle and used it in eventListener to greatly decrease function repeating rate.

#######################

### v1.2.0 - 27.08.2019

- Added animation to reviews section (JS + CSS). When scrollY gets specific value, entire section slides in from right browser edge. Animation only occurs with min-width: 1060px. Added eventListener for window.resize that removes animation if screen size is smaller than 1060px.

- Animation removed in v1.3.3.

#######################

### v1.1.0 - 22.08.2019, 23.08.2019

- One year later I started to add some JS code to this project.

- Added few pics and created slider that will change every pic with 4 seconds delay.

- Added buttons to slider to change slides to next and previous on click. Added timer reset in JS code to make automatic slide change occur 4 second after each click and 4 seconds after previous change if we won't use buttons.

- By default buttons have opacity with value of 0 to make them invisible. When we'll hover over slides, opacity value will change to 0.3. When we'll hover over button, it's opacity value will change to 0.7.

#######################

### v1.0.0 - 20.08.2018

- First version of this project was created using just HTML and CSS. It was based on some website found here:
https://www.webdesign-inspiration.com/ and without looking into code of this website. That was the test for my skills in that moment.

#######################
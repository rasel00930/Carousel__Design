# Carousel__Design
Project Overview:
This project is a dynamic carousel that displays a series of cards containing images and text.

It includes features such as:

1. Pagination using dots

2 .Automatic sliding every few seconds

3 .Left and right arrow navigation

4. Hover effects on the cards

5. Responsive design for different screen sizes


Code Structure:

HTML:

The HTML structure includes a container for the carousel, navigation arrows, and pagination dots.

CSS: 

The CSS file styles the carousel, cards, arrows, pagination dots, and hover effects.

Javascript:

Number of Visible Cards (n):
The number of visible cards is dynamically calculated based on the container width and card width. 
It is determined by the updateVisibleCards function, which adjusts based on screen size.

Slide Interval (x):
The automatic slide interval is set to 3000 milliseconds (3 seconds) in the setInterval function. 
You can change the interval by updating this value.

Other Feature:

Pagination: Dots indicating the number of sets of visible cards. Clicking a dot navigates to the corresponding set.

Arrows: Left and right arrows for manual navigation.

Hover Effect: When hovering over a card, it scales up slightly and other cards move away from it.

Responsive Design: Adapts the number of visible cards based on the screen size for a consistent user experience across devices.

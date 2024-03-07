Vertical Icon Menu with Tooltip
This is a JavaScript code snippet that generates a vertical icon menu with tooltip tooltips. The code is contained within a single file named index.js.

Overview
The provided code consists of two classes:

MenuItem
Represents each item in the menu. It includes properties for the icon class name and the tooltip text.

Menu
Represents the entire menu, containing an array of menu items. It provides a method to render the menu items onto the specified container.

Usage
To use this code:

Create an HTML file with a container element (e.g., <div id="menu-container"></div>) where you want the menu to appear.
Include the index.js file in your HTML.
Instantiate the Menu class with the ID of the container and an array of MenuItem instances, providing the icon class names and tooltip texts.
Call the render() method of the Menu instance to render the menu onto the specified container.
Example
An example of usage is provided within the index.js file. It initializes a menu with three items (Home, About, and Contact) and renders it onto a container with the ID menu-container.

Notes
This code assumes the presence of an HTML file with a container element for the menu.
The appearance of the icons and tooltips can be customized by modifying the provided CSS or by adding additional classes and styles.
Feel free to modify the code to suit your specific requirements or integrate it into your projects.


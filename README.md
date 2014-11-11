vroi_css_generator
==================

implementation assistance tool for VisualizeROI.com

This application consists of an HTML file, CSS file, and Javascript file. External dependencies include jQuery libraries (jQuery, jQuery UI, and jQuery-UI.css) called from the Cloudflare CDN.

The purpose of the application is to assist in the implementation of VisualizeROI models by providing some automation in the production of code for the init, update, and styles sections. The user first uploads the background image to an image server; he then fills out the data blocks in the data entry tab, drags and drops the graphical elements in the interaction tab, and then hits a button to generate the init, update, and styles codes. These codes are then copied into the corresponding panels in the VisualizeROI application.

The interface is separated into multiple sections using jQuery tabs for ease of navigation. The entire application is a single HTML page. CSS styling is minimal. The user's background image is loaded into the page via URL. 

The default values for many of the data entry blocks are set in the Javascript file. The values are determined by the requirements of the InsideView case. 

The general flow is: get user input, compute location of each graphical element, then concatenate the scripts. 


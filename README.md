# På Vägen Read Me File
A data repository for displaying a well navigated website to inspire for a roadtrip in Sweden and Norway. The webpage includes a description 
about different sides of Sweden, the north and Stockholm area for example. With different media tools of video and images it provides a good
imagination of what such a roadtrip could look like. The google maps help the reader to understand distances and different scenaries. 

The idea for this project came to me as I believe that in these times it is nice to remember what the country that you live in actually 
has to offer. So I created this imaginary roadmap trip that people can do through Sweden. Through Javascript the user can see on 
different Google Maps API and use the contact form to provide feedback and ask additional questions.

This was the second of four Milestone Projects that made up the Full Stack Web Development Program at The Code Institute. The main 
requirements were to make an interactive and responsive website with HTML5, CSS3 and JavaScript.

# UX
![Responsive view of homepage](/pictures/responsive.png)

## Users
Expected users of the website include nature interested viewers that want to plan a holiday without flying anywhere and be more free 
of where they want to go. The website only provides a small perspective on what road travels in Sweden has to offer, but not all 
of them, because there would be too many. It is a motivation show people that other travels that can be much more sustainable than flying 
or taking a big cruise ship exists.

## User Stories
The following User Stories helped me to create a design that would satisfy the needs of several different types of users.

### New Users
A person user wants to learn more about possible travel ideas around Stockholm and the northern part of Scandinavia (Sweden + Norway).
These people can use the google maps to have an initial understanding of distances and how much they could maybe do in a day (Stockholm 
travels) or in a week (Norrland travels).
Lastly the viewers have the chance to leave a note to maybe show how much they liked their travels, or do give feedback on what other 
things the website should include. 

### Returning Users
A user that don't want to travel by airplane and thus searches for opportunities closer by. So to use this side there are more than 
only one travel suggestion and thus users can return again. 

### Tablet Users
Users, who primarily use an iPad Pro to browse websites. They want to have a good experience on this website and view all the features 
in an equally aesthetic way.

## Design Process
1. Strategy plane: 
    * From the onset, I knew that my primary aim was to educate users about travel opportunities inside of Sweden, 
    in a way that was easily used, accessible and memorable. As I just started to develop my Javascript skills the aim was to combine these
    with my HTML and CSS knowledge. I therefore started the UX process by thinking of Google Maps and how I can make them nicely read for 
    every different user. 
1. Scope plane: 
    * Having decided the main aim for the project, I began outlining the key features that I wanted my website to have. To do so, I 
        focused on the JavaScript that I wanted to experiment with and ultimately implement, as I knew this would be crucial to the aim 
        of making the website interactive. This led me to decide that I wanted to focus on three key features: a page with a Google Maps API, 
        a "scroll-up" button and lastly the contact form. 
1. Strcuture plane: 
    * Once I had narrowed down what features I wanted to include, I began to formulate the structure of my design into four seperate pages:
        1. Home
        1. Norrland
        1. Stockholm
        1. contact
    * These seemed logical to me, as the 'Home' page would welcome users to the project with a brief overview of the organisation's aims. 
    They would then continue to 'Norrland' to get to know the first roundtrip by road, which is aimed for the travelers that want to travel
    for several days. The "Stockholm" page includes daily trips that can be done from Stockholm. I choose Stockholm to be the daily trip planer
    because it is Swedens capital and has by far the most citizens and tourists. Lastly, the "contact" page seems just logical at the end,
    because with it users can leave comments and ask questions if they should have any. 
1. Skeleton plane: 
    * As mentioned in the Structure Plane, I had begun to consider including two main ways for the user to navigate the website: both the 
    menu bar, and additional buttons as prompts. I came to this decision whilst considering the pace that I wanted the user to navigate 
    the website. I wanted it to be easy for them to use the menu to move between each page, but that they could also rely on the buttons 
    placed aespecially on the "Home" page, so that the users could first grasp a first idea of the trips and then choose which one they would 
    favour more. This would keep the pace going as they swiftly move through the design, learning throughout the process before ultimately 
    being able to ask questions. However, as well as deciding on the menu bar and buttons, this stage of my design process also helped me 
    to think of "scroll up" button created with Javascript, which makes it easier for the user to return to the navigation bar. 
1. Surface plane:
    * For my design to work, I knew that it would be important to create a theme that would keep the user interested in the topic. 
    Thinking of roadtrips in Sweden, as it is such an interesting topic in which I wanted to highlight its simplicity with green highlights
    that should represented the forests and nature, but in a more fun way. So I chose a color scheme of four different colors that support
    each other, but does not take too much focus away from the design itself. 
        1. Simpler Lime Green: ![#7dce94]
        1.  Scuffed Dark Grey: ![#3d3d3f]
        1. Vanilla Grey: ![#f6f5f3]
        1. White-ish: ![#f9f8fd]
    * The colours represent a modern, but not too aggressive colour scheme that goes hand in hand with the pictures chosen for this website.
    The green respresents a familiar color to nature while the dark grey is a good contrast to it and the different white tones underline 
    the harmony between all four colors. 
    * I turned to Google Fonts to select the fonts for my project. I wanted to find two compatible fonts that would help to both make 
    the design look credible (so users would take it seriously as a source of information), but that would not be intimidating as I want 
    the users to feel motivated to read on. As a result, I settled for Montserrat for my titles and Comforrta for the content. Both fonts 
    are quite similar, which is stimulating to the reader and doesn't take too much focus away from what is presented.

# Features
Features planned, implemented and outlined for later development:

## Existing Features
This project consists of four pages, of which all can be reached through the navigation bar as well as the seperate buttons on the "Home" Page.

### Consistent features across all pages
* The menu at the top of the page and footer are consistent and responsive throughout the website.
* Each page an interactive "scroll-up" button to make the usage easier and bring the user easier back to the navigation bar. 
The button is integrated in the color scheme for this website.
* The images are of high quality and often shot by myself. They highlight the beauty of the country and are intented to stimulate the user
to start their own roadtrip.

### Home
* The user meets a simple title that presents the website with a background image of a map and a small car. 
* The user is then presented to a more overview page that presents the two different areas where the roadtrip can bring them.
* The user is also presented with buttons to bring them directly to the roadtrip. 

### Norrland
* The title section introduces the user to an aerial youtube video of the landscape that they are awaiting on this trip. 
* They are then presented with facts about Lofoten and additional images to complement the understanding of the landscape. 
* An interactive map (Google Maps API) follows with the location of the seven places to visit during this roadtour. 
* The last section next to the map provides a small explanation of the roadtour and why these destinations where chosen. 

### Stockholm
* This page starts with a carousel image gallery showing different pictures of Stockholm
* Then it continues with presenting three different day trips from Stockholm
* That section is together with an interactive map (Google Maps API) showing the location the three different places for the day trips. 
* The last section presents and explains the three different locations and why they are worth going to. 

### Newsletter
* The first section of this page features a title and information about the contact form.
* It also features a form that the user's can complete to leave feedback or ask questions, created with EmailJS.
* Submitting the form correctly leads to a modal popup with a thank you message personalised with the user's name.

## Features Left to Implement
* A future feature could be to create a way for the user to download a copy of the roadmap from google Maps, so that they can have it saved on their phone and 
don't need to have internet access to see the road. 
* Another future would be to implement more roadmaps from the south of Sweden (Småland) as well as the east coast. 
* Then it would be also fun if the users could share their photos from the roadtrips and they would be shown on the website in a small gallery. 

# Technologies Used
## Languages, libraries, frameworks, editors and version control
* HTML5
    * The language used to create the form and add content to the website.
* CSS3
    * The language used to style the HTML5 elements according to the design and colour scheme.
* JavaScript
    * The languge used to implement the Google Maps API feature, send emails with EmailJS and animate the scroll-up button throughout the project.
* jQuery
    * I used the jQuery library to help write the code for the scroll-up button.
* Bootstrap framework
    * I decided to use Bootstrap's grid container system as I wanted to design my project responsive for all devices.
* Gitpod
    * I relied on Gitpod's dev environment to write the code for my project.
* Git Version Control
    * I used Git for Version Control to track and record changes to my code and refer back when needed.
* GitHub
    * I hosted my deployed website to GitHub, with previous versions of my code stored through the commit history.

# Additional tools used
* Google Maps API
    * I used the Google Maps API to create the interactive map featured on "Norrmalm" and "Stockholm" including destinctive markers for the roadmap. 
* EmailJS
    * EmailJS allowed me to include a feature that submits a user's details once they have completed the contact form, to leave comments or ask questions. 
* Figma
    * Figma helped me design my project, by creating wireframes for this project. 
* FontAwesome
    * I relied on a free FontAwesome arrow icon to create the scroll-up button. I also used two social media icons for Instagram and Facebook.
* Unsplash
    * This was the source of several of the images used in my project.
* Google Fonts
    * I used two complementary fonts from Google for my project: Montserrat and Comfortaa.
* W3C Markup Validation Service
    * This was a great tool throughout the project to check whether there were any errors in my HTML and CSS code (as discussed in more detail below).
* JSHint
    * This tool helped me test my JavaScript and jQuery code (explained in more detail in the Testing section below).

# Testing
Please view the complete testing process in this separate document here.

# Deployment
## Deploying my project
I created my project on GitHub and used GitPod's development environment to write my code. Use the following link to view my live project: 
'''''''


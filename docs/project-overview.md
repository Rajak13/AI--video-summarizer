## Project Overview

**1.Home Page**
- The website will have a home page with a top nav, hero-section, about section, some features and a footer. All these content will be stored inside Strapi insatance.

**2.Login and Register Page**
- Both login and register page's auth woll be handled using Strapi and we will use the Next middleware file to check if authorized users exist and redirect accoridngly.

**3.Dashboard and Account Page**
- A simple dashboard page showing available credits and summaries will be displayed along with an account page, where use can update their information and change profile picture.

- *Generate Summary*
    - This will done via making a call to Open AI SDK after the user enters Youtube Video URL. The summarization will be done using the Transcipts of the Youtube Video. This is quite a limitation and I will be looking for solutions in the future to further enhance this summary tool
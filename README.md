# React test application

https://github.com/myh-denis/react-test-app

First - `npm i` to install all packages

## Front-end server

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build:prod` for a production build.




# Requirements for test application
- We need to see your own code.
- The app should load and display photos from our API endpoint `http://interview.agileengine.com`
- Obtain a valid Bearer token with valid API key (don't forget to implement invalid token handler and renewal)

    `POST http://interview.agileengine.com/auth`
    
    `Body: { "apiKey": "23567b218376f79d9415" }`
    
    `Response: { "token": "ce09287c97bf310284be3c97619158cfed026004" }`
- The app should fetch paginated photo feed in JSON format with the following REST API call
    (GET): `GET /images`

    Headers: `Authorization: Bearer ce09287c97bf310284be3c97619158cfed026004`

    Following pages can be retrieved by appending ‘page=N’ parameter:

    `GET /images?page=2`

    No redundant REST API calls should be triggered by the app.
- The app should fetch more photo details (photographer name, better resolution) by the following REST API call (GET): 
    `GET /images/${id}`
- We value code readability and consistency, and usage of modern community best practices and architectural approaches, as well, as functionality correctness. So pay attention to code quality.
- Target completion time is about 2 hours. We would rather see what you were able to do in 2 hours than a full-blown algorithm you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.

# UI/UX Requirements
- The app should contain two screens
- Grid view:
    - Displays photos in a flexible grid, number of columns depending on the width of the viewport.
    - When a user clicks on a grid cell open up the Photo View.
    - (optional) Avoid image flickering on scroll.
- Photo view:
    - Displays a fullscreen photo in a closable popup.
    - Shows author name, camera model and hashtags as an overlay.
    - Allows sharing a photo URL via a floating action button.
    - Support zooming and panning for images.
    - Supports navigating between images (left/right)
    - (optional) Animated screen transitions would be a plus.

# Expected Deliverables
- Source code.
- Readme, with instructions, how to build and run.

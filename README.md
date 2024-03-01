# To-Do App

## Overview

This is a basic to-do application, that allows users to add items to a list, edit them, mark them as done, and delete them.
I have also added a login and sign up option, so that when a user does this, they will have the ability to save their tasks, and view them after logging out and back in.

## Technology

Vite was used to create a React JavaScript project. Firebase and Firestore were also used.

## How it works

Various components were created initially for the different sections of the application. I then used BrowserRouter and Routes to allow navigation between the various pages, and setup a mock login function, that would allow me to see what different pages would look like depending on login state.

I created functions for displaying list items that are stored in state. Other functions for handling completion, updates and deletion were also created.

Firebase was used to allow users to sign up and login with their email and password. I then added a Firestore database, which saves users tasks, and will present the correct tasks to the user depending on who signs in.

Each of the handler functions then work depending on whether the user is signed in or not. If they are, then any changes to the task and also changed in the database. If the user isn't signed in, then the changes just occur locally and the list will disappear on page refresh.

## Styling

Tailwind CSS was used for styling, with a few custom styles added.

## Improvements

I'd like to add functionality so that tasks can be stored locally in the browser if the user isn't logged in, and also to allow the user to create multiple lists.

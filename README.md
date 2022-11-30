# Starting with project

### Steps to run project:

- install dependencies `yarn`
- run app locally `yarn start`

### Steps While starting with project:

First I make the structure of the application installed my dependencies that i will need
I think about material ui as it have a ready ui components which is great for making dashboards and applications which deal with data

# Project structure

- components directory contains all the ui components and state hooks
- helpers contain all the function which is used as utils
  - dateHelper helps in converting from businessDate to Js date
  - fetchHelper mocks an http server in real application
  - sortHelper implements the sort comparator function depend on which key are we sorting on
- styles contain the css files
- interfaces we declare inside it's files the new types & interfaces which will be used all over the project

# Assumptions

- Assumed data will be sorted by businessDate by default
- Sorting is always in descending order
- Start & End time sort by whole date not only the hour/min/sec
- Filtering by date can only be done using Date not DateTime
- Will consider customer firstname & lastname as a fullname through the project
- Won't view the customer notes since it's not important to be shown in the list

# Improvements

- Adding a Loader while loading data from http request in real life app
- Adding Loaders in dynamically imported Components
- Adding unit testing to ensure logic/components is working as expected
- Can dockerize the project to deploy it as a container
- Can make mobile view
- Can use Redux for improving the state managment instead of passing props
- Making filtering by date range

# UI HINT

- Click away to exit the filter dialog "can be improved by adding a close button also for better ux"

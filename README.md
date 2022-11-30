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

# Improvements

- Adding a Loader while loading data from http request in real life app
- Adding unit testing to ensure logic/components is working as expected


add an encrypted version of your heroku api key to your .travis.yml file

travis encrypt $(heroku auth:token) --add deploy.api_key

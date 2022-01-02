#ruby officail 2.5
FROM  ruby:2.5

#update dist-list
RUN apt update -y

#ruby 2.5 default gem 1.* but this project i used upgraded gem 2.*  
RUN gem update --system 

#install bundler
RUN gem install bundler

#install rails 
RUN gem install rails

#install sqlite3
RUN apt install sqlite3 -y

#set working directory
WORKDIR app

#add all project folder
ADD . .

#install packages that used in project
RUN bundle install


#exposing the port
EXPOSE 3000

#run the rails puma server
CMD ["rails", "server", "-b", "0.0.0.0"]


#ruby vesion 2.5
FROM  ruby:2.5
 
#ruby 2.5 default gem 1.* but this project i used upgraded gem 2.*  gem
RUN gem update --system 

#install bundler i used 
RUN gem install bundler 

#installing rails
RUN gem install rails

#install action_text feature of rails6
RUN rails action_text:install

#setting default working directory
WORKDIR app

#adding project folder/files
ADD . .

#install dependency used in the project
RUN bundle install

#exposing the port
EXPOSE 3000

#running the server
CMD ["rails", "server", "-b", "0.0.0.0"]


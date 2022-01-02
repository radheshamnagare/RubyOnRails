#ruby 2.5
FROM  ruby:2.5
 
#ruby 2.5 come with gem 1.* but in this project i used upgraded gem 2.*
RUN gem update --system 

#install the bundler 
RUN gem install bundler

#installing rails 
RUN gem install rails

#setting up default directory app
WORKDIR app

#adding project file/folder
ADD . .

#install dependent packages
RUN bundle install

#exposing port
EXPOSE 3000

#runing the rails server
CMD ["rails", "server", "-b", "0.0.0.0"]


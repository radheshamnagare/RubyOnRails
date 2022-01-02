# RubyOnRails


Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages. in this contrubution i made different project using diffrent feature of rails.we need to run these rails apps on any of machine we need to installed ruby & rails .
  


#### We can run these app on docker interface  
  - installation of docker follow on following reposotory:
  
     https://github.com/radheshamnagare/Docker-Installation.git
  
  - we can find all images on docker-hub
   
    - The Friend-list app :
   
     This application is find good for we can store our friend's-list information like contact,twitter ..etc. 
     
     pulling docker image of Friend-list app
     
     ```
     docker pull radhesham/friend-list:latest
     ```
     run pulled image :
     
     ```
      docker run -p 80:3000  radhesham/friend-list:latest
     ```
     we can run on browser
     ```
     localhost/
     ```
     
    - The action-text:
      
      This is testing project for rich-text of rails6 feature .this is very nice feature of rails6 so we can formatting,writting,attach links,images/media anything.we can test your machine
      
     pulling docker image of action-text app
     
     ```
       docker pull radhesham/rails-action-text:latest
     ```
     run pulled image :
     
     ```
      docker run -p 80:3000 radhesham/rails-action-text:latest
     ```
     we can run on browser
     ```
     localhost/
     ```
     - translator :
       This is translator project using webpack react and rails6 .it can translate one source language to unother language and some feature like speech synthesis 
       
      pulling docker image of action-text app
     ```
      docker pull radhesham/rails-translator:latest
     ```
     run pulled image :
     ```
      docker run -p 80:3000 radhesham/rails-translator:latest
     ```
     we can run on browser
     ```
     localhost/
     ```
    
      - Blog-post :
       This is blog-post project using  rails6 .you can post blog here with your credentials .you can find more on bellow 
       
      pulling docker image of blog-post app
     ```
      docker pull radhesham/blog-post:latest
     ```
     run pulled image :
     ```
      docker run -p 80:3000 radhesham/blog-post:latest
     ```
     we can run on browser
     ```
     localhost/
     ```
    we can find all docker files in project folder 
    
#### Installation
 
 1. installing ruby 
 ```
 $sudo apt-get install ruby-full
 ```
 2. make sure it is install
 ```
 $ruby -v
 ```
 3. installing gem (before installing gem install database stuff first)
 ```
 $sudo apt install gem
 ```
 4. make sure it is install
 ```
 $gem -v
 ```
 5. install rails 
 
 ```
 $sudo gem install rails
 ```
 6. make sure it is install
 ```
 $rails -v
 ```

- For javascript we need npm  & nodejs

 1. Install Nodejs
 ```
 $sudo apt install nodejs
 ```
  2. make sure it install
  ```
  $nodejs -v
  ```
  3. Install Node Package Manager
 ```
 $sudo apt install npm
 ```
  4. make sure it is install

 ```
 $npm -v
 ```
  5. Install Yarn package manager for rails

```
$npm install --global yarn
```
6. make sure it is install
```
$yarn -v
```
7. Install Default Database 

```
$sudo apt install sqlite3-dev
```
```
$ sudo apt install libsqlite3-dev

```
```
$sudo apt install sqlite3
```


# Blog-post

Blog-post is social media application where user can post there thoughts,feelings or just talk about somthing they are passionate about.
user can put as long containt ,link,images to represent it's blog.

## How to run app
 1. Either fork or download the app and open the folder in the cli .
 2. Install all the dependency using `bundle install` command.
 3. Start the server using `rails server` app will be served at http://localhost:3000/
 4. Go to http://localhost:3000/ in your browser and post something.
 
 ## How to post blog
 1.First signup .
 2. After signedin go to post section and there is 'new' button on click `new` button you are jump to the post section .
 3. Submit the post
 4. after sumbit you will see the post in blog section
 
 ## Features
 - Post
   - post gets send to backend and gets posted to all users
   - We can put so much content like images,vedio,audio ,text,links etc.
   - We can formate or styling the text as you want
   - We can set the template to background for Blog post
   - On bottom of post you can see likes,comments,last update,when to created so much things
   - User can be updare/delete it
 - Likes
   - user can like public as well selef post if user want unlike user can unlike it also
 - Comments
   - user can post as so much comments 
   - user can delete the comments also
   - user can see all of comments of each post      
 - Profile
   - user can set profile like name,bio,profile picture,contact
   - user can update the profile like if user want to delete profile or update the perticular feild
   - if perticular user post the Blog there is showing profile
 
 - User account
  - all the post,profile belong to user account
  - user can update it's credential like email,password
  -  user can delete the account (on delete account all the data will destroy)

  ## Future features
   - User can live reload
   - User can subscribe each other so they can access that user Blogs
   - User can generate link for it's post to share it
   

# Friend-list

Friend-list is records maintainer like we are used in our mobile to save contact but here some advance features are provoide for user. 
the idea is sometime we quick need some information like contact,email or twitter and from this application we can acess quickly

## How to run app
 1. Either fork or download the app and open the folder in the cli .
 2. Install all the dependency using `bundle install` command.
 3. Start the server using `rails server` app will be served at http://localhost:3000/
 4. Go to http://localhost:3000/ in your browser and post something.
 
 ## How to save records
 1. First signup with some credential
 2. After signedin go to Friend's application logo here we can find option to create new contact
 3. After create contact we can show there link in table to show the all details.

 ## Features
 - Create Friend-list
   - We can add as so much friend-list
   - After add we can delete,update,show all these operations
 - User
  - Each friend-list belongs to user
  - So if user delete it's account all the perticular information will also deleted  .

## Future features
 - user can add more contain to perticular feild like contact no,email,twitter
 -  add photo of each friend
 -  user can set own account profile

# Translator 
 This application quite simple feature ,translate one language text to another language text.there are list of languages to translate one source text to another text. 
 
 ## How to run app
 1. Either fork or download the app and open the folder in the cli .
 2. Install all the dependency using `bundle install` command.
 3. Start the server using `rails server` app will be served at http://localhost:3000/
 4. Go to http://localhost:3000/ in your browser and post something.
 
 ## How to translate one text language to another
 1. Choose source language in select option
 2. put text on textarea
 3. choose destination language 
 4. On clicked to translate button we can see result of translation

## Feature
- Speach Synthesis
 - There is two speach button on clicked that we listen perticular contain in voice formate
-Clear text
 - we can clear text on click clear button

## Future features
 - speach recognization to add text





### Reference
 - https://rubyonrails.org/
 - https://guides.rubyonrails.org/
 - https://edgeguides.rubyonrails.org/action_text_overview.html
 - https://guides.rubyonrails.org/active_record_querying.html
 


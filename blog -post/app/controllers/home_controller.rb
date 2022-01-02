class HomeController < ApplicationController
  
   
  def index
  
  end

  def about

  end

  def all
    @posts = current_user.posts
  end
    
end

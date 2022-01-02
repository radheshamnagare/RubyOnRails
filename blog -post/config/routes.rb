Rails.application.routes.draw do
    
  get 'translator/translate'
  resources :posts do
    resources :comments, only: [:create,:destroy]
  end

  resources :likes,only: [:create ,:destroy]
  devise_for :users
  resources :profiles do
    member do
      delete :delete_image_attachment
    end  
  end  

  get 'home/notposts'
  get 'home/index'
  get 'home/about'
  get 'home/all'

  root 'posts#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

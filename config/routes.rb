Rails.application.routes.draw do
  resources :suggestions

  get 'categories', to: 'categories#index'
  
  post 'signup', to: 'users#create'
  post 'login', to: 'users#show'
  delete 'logout', to: 'users#logout'

  post 'upvotes', to: 'upvotes#create'

  post 'comments', to:'comments#create'
end

Rails.application.routes.draw do
  resources :suggestions

  get 'categories', to: 'categories#index'
  
  post 'signup', to: 'users#create'
  post 'login', to: 'users#show'
  delete 'logout', to: 'users#logout'
end

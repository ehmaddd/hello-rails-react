Rails.application.routes.draw do
  resources :roots, only: [:index]
  root 'roots#index'

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
end

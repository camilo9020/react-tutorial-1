Rails.application.routes.draw do
  scope '/api' do
    resources :comments, only: [:index, :new, :create]
  end
end

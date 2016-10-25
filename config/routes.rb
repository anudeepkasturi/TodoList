Rails.application.routes.draw do

  #This means that / path will call #root from StaticPagesController, which is empty (renders root view)
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end

end

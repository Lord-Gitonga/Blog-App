class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/posts' do 
        post = Post.all
        post.to_json
    end

    get '/users' do 
        user = User.all
        user.to_json
    end

end
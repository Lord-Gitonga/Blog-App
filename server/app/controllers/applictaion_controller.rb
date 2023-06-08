class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/posts' do 
        post = Post.all
        post.to_json
    end

    get '/posts/' do
        category = params[:cat]

        if category.nil? || category.empty?
            posts = Post.all
        else
            posts = Post.where(category: category)
        end

        posts.to_json
        
    end

    post '/posts' do 
        post = Post.create(
            title: params[:title],
            desc: params[:desc],
            img: params[:img],
            cat: params[:cat]
        )
        post.to_json
    end

    patch '/posts/:id' do 
        post = Post.find(params[:id])
        post.update(
            title: params[:title],
            desc: params[:desc],
            img: params[:img],
            cat: params[:cat]
        )
        post.to_json
    end

    delete '/posts/:id' do
        post = Post.find(params[:id])
        post.destroy
    end
 
    


    get '/users' do 
        user = User.all
        user.to_json
    end

    post '/users' do 
        user = User.create(
            username: params[:username],
            email: params[:email],
            password: params[:password]
        )
        user.to_json
    end

    patch '/users/:id' do
        user = User.find(params[:id])
        user.update(
            username: params[:username],
            password: params[:password]
        )
        user.to_json
    end

    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
    end

end
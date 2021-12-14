class CommentsController < ApplicationController

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  def destroy
    @comments.destroy
  end
  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

end
